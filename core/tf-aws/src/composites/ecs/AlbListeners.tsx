import { toId } from '@dinghy/base-components'
import { useAwsLb } from '../../services/elbv2/AwsLb.tsx'
import { AwsLbListener } from '../../services/elbv2/AwsLbListener.tsx'
import { AwsLbListenerRule } from '../../services/elbv2/AwsLbListenerRule.tsx'
import { listenerId } from './ids.ts'
import type {
  EcsClusterType,
  EcsTargetGroupRuleType,
  EcsTargetGroupType,
} from './types.ts'

// One entry per (source, rule) pairing. `source` is the human-readable
// owner name used in `_id` / display; `tgRef` is the Terraform expression
// the `forward` action should use — either the user-supplied ARN of an
// existing TG, or the `aws_lb_target_group.<id>.arn` reference we just
// rendered.
type Entry = {
  source: string
  tgRef: string
  rule: EcsTargetGroupRuleType
}

// One `aws_lb_listener` per entry in `cluster.alb.ports`.
//   - Ports whose string form contains `443` (443, 8443, 7443, …) render
//     as HTTPS; everything else is HTTP.
//   - When an HTTP port has a secure sibling (`80`↔`443`, `8080`↔`8443`,
//     trailing `80` → `443`), the HTTP listener becomes a 301 redirect to
//     the HTTPS sibling. Redirect listeners skip rule rendering.
//
// Each service's `target_group.rules` expands into one rule. The rule
// whose `path_patterns` includes `/*` becomes the listener's
// `default_action` (regardless of `cognitoAuth` — ALB supports auth in
// default_action). Everything else renders as `aws_lb_listener_rule` per
// HTTPS listener.
//
// Rules with `cognitoAuth: true` chain `authenticate-cognito` → `forward`
// (order 1, 2). Cognito config comes from the cluster's `alb.cognito`.
export function AlbListeners({ cluster }: { cluster: EcsClusterType }) {
  const alb = cluster.alb!
  const ports = alb.ports ?? [80]

  // Flatten every opted-in target group (services' own plus named
  // `alb.target_groups` entries) + its rules into a single entries list
  // so we can split them into the listener default vs routed rules in
  // one pass. `tgRefFor` always resolves to a locally-rendered TG —
  // `target_groups[*].lambda` produces a fresh Lambda-target TG named
  // `${cluster.name}-${tgKey}` (see Alb.tsx → LambdaTargetGroup).
  const tgRefFor = (key: string, tg: EcsTargetGroupType): string => {
    const localName = tg.lambda ? `${cluster.name}-${key}` : (tg.name ?? key)
    return `\${aws_lb_target_group.${
      toId(`awslbtargetgroup_${localName}`)
    }.arn}`
  }
  const allEntries: Entry[] = []
  for (const service of Object.values(cluster.services)) {
    if (!service.target_group) continue
    const ref = tgRefFor(service.name as string, service.target_group)
    for (const rule of service.target_group.rules) {
      allEntries.push({ source: service.name as string, tgRef: ref, rule })
    }
  }
  for (
    const [tgKey, tg] of Object.entries(alb.target_groups ?? {})
  ) {
    const ref = tgRefFor(tgKey, tg as EcsTargetGroupType)
    for (const rule of (tg as EcsTargetGroupType).rules) {
      allEntries.push({ source: tgKey, tgRef: ref, rule })
    }
  }

  // Listener default: any rule whose path_patterns includes `/*`. ALB
  // supports `authenticate-cognito` in default_action, so an auth-gated
  // `/*` rule still folds into the listener default rather than producing
  // an extra resource.
  const defaultEntry = allEntries.find((e) =>
    e.rule.path_patterns?.includes('/*')
  )
  const ruledEntries = allEntries.filter((e) => e !== defaultEntry)
  const defaultAction = defaultEntry ? ruleActions(cluster, defaultEntry) : [{
    type: 'fixed-response',
    fixed_response: {
      content_type: 'text/plain',
      message_body: 'Service Unavailable',
      status_code: '503',
    },
  }]

  // For each non-HTTPS port, compute whether it has a secure sibling and
  // should therefore redirect instead of forward.
  const secureEquivalent = (port: number): number | undefined => {
    const s = String(port)
    if (!s.endsWith('80')) return undefined
    const candidate = Number(s.slice(0, -2) + '443')
    return ports.includes(candidate) ? candidate : undefined
  }

  return (
    <>
      {ports.map((port) => {
        const redirectTo = String(port).includes('443')
          ? undefined
          : secureEquivalent(port)
        return (
          <PortListener
            key={port}
            cluster={cluster}
            port={port}
            redirectTo={redirectTo}
            defaultAction={defaultAction}
            ruledEntries={ruledEntries}
          />
        )
      })}
    </>
  )
}

// HTTPS listener cert resolution:
//   - user supplied `alb.certificate_arn` → reference it verbatim (ACM's
//     data source can't look up by ARN, so we can't wrap it into a node);
//   - otherwise → reference the auto-generated cert via the validation
//     resource's `certificate_arn` output so the listener waits until
//     ACM has fully verified DNS.
function certificateArnFor(cluster: EcsClusterType): string | undefined {
  const explicit = (cluster.alb as any)?.certificate_arn
  if (explicit) return explicit
  if (!cluster.alb?.alternativeNames?.length) return undefined
  return `\${aws_acm_certificate_validation.${
    toId(`${cluster.name}_alb_cert_validation`)
  }.certificate_arn}`
}

// Explicit depends_on for the listener. Terraform already derives a dep
// from the `certificate_arn` interpolation, but when the cert is
// auto-generated we want a hard link on the validation resource so the
// listener never races ahead of ACM.
function listenerDependsOn(
  cluster: EcsClusterType,
  isHttps: boolean,
): string[] | undefined {
  if (!isHttps) return undefined
  const userCertArn = (cluster.alb as any)?.certificate_arn
  if (userCertArn) return undefined
  if (!cluster.alb?.alternativeNames?.length) return undefined
  return [
    `aws_acm_certificate_validation.${
      toId(`${cluster.name}_alb_cert_validation`)
    }`,
  ]
}

// Build the action chain for an entry. When `cognitoAuth` is true we
// prepend an `authenticate-cognito` block and set `order` so AWS runs
// auth first, forward second.
function ruleActions(cluster: EcsClusterType, entry: Entry): any[] {
  const forward = { type: 'forward', target_group_arn: entry.tgRef }
  if (!entry.rule.cognitoAuth) return [forward]
  const cognito = cluster.alb!.cognito!
  return [
    {
      type: 'authenticate-cognito',
      order: 1,
      authenticate_cognito: {
        user_pool_arn: cognito.user_pool_arn,
        user_pool_client_id: cognito.user_pool_client_id,
        user_pool_domain: cognito.user_pool_domain,
        scope: cognito.scope,
        session_cookie_name: cognito.session_cookie_name,
        session_timeout: cognito.session_timeout,
        on_unauthenticated_request: cognito.on_unauthenticated_request,
      },
    },
    { ...forward, order: 2 },
  ]
}

// Resolve a stable, readable rule label.
//   - `rule.name` wins when supplied (clearest intent).
//   - Otherwise derive from the first path pattern: `/public/*` →
//     `public`, `/admin/*` → `admin`, `/*` → `root`.
//   - When `methods` are configured, append a lowercase suffix joining
//     all of them (`/api/*` + `[GET, POST]` → `api_get_post`).
// Used in both the Terraform resource _id and the display title so rules
// read as `<source> <pathname>` (e.g. `oss-v2-web public`).
function rulePathname(rule: EcsTargetGroupRuleType): string {
  const base = rule.name ? toId(rule.name) : (() => {
    const p = rule.path_patterns?.[0] ?? ''
    if (p === '/*') return 'root'
    return toId(p) || 'root'
  })()
  if (rule.methods?.length) {
    return `${base}_${rule.methods.map((m) => toId(m.toLowerCase())).join('_')}`
  }
  return base
}

// AWS caps each condition's `values` array at 5 entries per listener
// rule. When a rule spans more patterns/hosts we split it into chunks
// of 5 and render one `aws_lb_listener_rule` per chunk (each with the
// same forward/auth action). Returns one condition[] per chunk.
const ALB_RULE_VALUES_LIMIT = 5

function chunk<T>(arr: T[], size: number): T[][] {
  if (!arr.length) return []
  const out: T[][] = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

function ruleConditionChunks(rule: EcsTargetGroupRuleType): any[][] {
  const pathChunks = chunk(rule.path_patterns ?? [], ALB_RULE_VALUES_LIMIT)
  const hostChunks = chunk(rule.host_headers ?? [], ALB_RULE_VALUES_LIMIT)
  const methodChunks = chunk(
    (rule.methods ?? []).map((m) => m.toUpperCase()),
    ALB_RULE_VALUES_LIMIT,
  )
  // No conditions at all → one empty chunk so the rule still renders
  // (caller probably has host_headers in tow we don't know about, or
  // wants a no-condition catch-all — match-by-priority).
  if (!pathChunks.length && !hostChunks.length && !methodChunks.length) {
    return [[]]
  }
  // Cross-product of chunks. In practice users use one of these, not
  // all three at high counts, so the cross-product stays small.
  const result: any[][] = []
  const paths = pathChunks.length ? pathChunks : [null]
  const hosts = hostChunks.length ? hostChunks : [null]
  const methods = methodChunks.length ? methodChunks : [null]
  for (const p of paths) {
    for (const h of hosts) {
      for (const m of methods) {
        const conds: any[] = []
        if (p) conds.push({ path_pattern: { values: p } })
        if (h) conds.push({ host_header: { values: h } })
        if (m) conds.push({ http_request_method: { values: m } })
        result.push(conds)
      }
    }
  }
  return result
}

function PortListener(
  { cluster, port, redirectTo, defaultAction, ruledEntries }: {
    cluster: EcsClusterType
    port: number
    redirectTo: number | undefined
    defaultAction: unknown[]
    ruledEntries: Entry[]
  },
) {
  const isHttps = String(port).includes('443')
  const { awsLb } = useAwsLb()
  const listenerTfId = listenerId(cluster, port)
  const extraDependsOn = listenerDependsOn(cluster, isHttps)

  const action = redirectTo
    ? [{
      type: 'redirect',
      redirect: {
        host: '#{host}',
        path: '/#{path}',
        query: '#{query}',
        port: String(redirectTo),
        protocol: 'HTTPS',
        status_code: 'HTTP_301',
      },
    }]
    : defaultAction

  return (
    <>
      <AwsLbListener
        _id={listenerTfId}
        _title={redirectTo
          ? `${cluster.name} :${port} to :${redirectTo}`
          : `${cluster.name} :${port}`}
        load_balancer_arn={awsLb.arn}
        port={port}
        protocol={isHttps ? 'HTTPS' : 'HTTP'}
        ssl_policy={isHttps ? cluster.alb!.ssl_policy : undefined}
        certificate_arn={isHttps ? certificateArnFor(cluster) : undefined}
        depends_on={extraDependsOn}
        default_action={action as any}
      />

      {
        /* Redirect listeners are catch-all by design — skip per-service
          rules so nothing escapes the HTTPS funnel. */
      }
      {!redirectTo && ruledEntries.flatMap((entry, index) => {
        const pathname = rulePathname(entry.rule)
        const basePriority = entry.rule.priority ?? (100 + index)
        return ruleConditionChunks(entry.rule).map(
          (conditions, chunkIdx, all) => {
            // Single-chunk rules keep the clean name; multi-chunk rules
            // get a 1-based numeric suffix so each TF resource is unique
            // and the labels read naturally (`public_1`, `public_2`, …).
            const suffix = all.length > 1 ? `_${chunkIdx + 1}` : ''
            return (
              <AwsLbListenerRule
                key={`${entry.source}_${pathname}${suffix}`}
                _id={toId(
                  `${cluster.name}_${port}_${entry.source}_${pathname}${suffix}_rule`,
                )}
                _title={`${entry.source} ${pathname}${suffix}`}
                listener_arn={`\${aws_lb_listener.${listenerTfId}.arn}`}
                priority={basePriority + chunkIdx}
                action={ruleActions(cluster, entry)}
                condition={conditions}
              />
            )
          },
        )
      })}
    </>
  )
}
