import { deepMerge, getRenderOptions } from '@dinghy/base-components'
import { z } from 'zod'
import { InputSchema as AwsCloudwatchLogGroupInputSchema } from '../../services/cloudwatch/AwsCloudwatchLogGroup.tsx'
import { InputSchema as AwsCloudwatchLogSubscriptionFilterInputSchema } from '../../services/cloudwatch/AwsCloudwatchLogSubscriptionFilter.tsx'
import { InputSchema as AwsEcsClusterInputSchema } from '../../services/ecs/AwsEcsCluster.tsx'
import { InputSchema as AwsEcsServiceInputSchema } from '../../services/ecs/AwsEcsService.tsx'
import { InputSchema as AwsEcsTaskDefinitionInputSchema } from '../../services/ecs/AwsEcsTaskDefinition.tsx'
import { InputSchema as AwsLbInputSchema } from '../../services/elbv2/AwsLb.tsx'
import { InputSchema as AwsLbTargetGroupInputSchema } from '../../services/elbv2/AwsLbTargetGroup.tsx'

// ---------------------------------------------------------------------------
// CloudWatch log-group + subscription-filter config. Shared shape for both
// service-level and container-level `log` blocks. Service-level adds a
// `scope` field (see below). All aws_cloudwatch_log_group fields pass
// through via the partial base schema; `subscription_filters` is our
// addition and rendered as one aws_cloudwatch_log_subscription_filter per
// entry.
// ---------------------------------------------------------------------------

const EcsLogSubscriptionFilterSchema =
  AwsCloudwatchLogSubscriptionFilterInputSchema.partial().extend({
    name: z.string(),
    destination_arn: z.string(),
    filter_pattern: z.string().default(''),
    // Required by CloudWatch Logs when `destination_arn` is a Kinesis
    // Firehose stream (Logs must assume a role to PutRecord on Firehose).
    // Trust `logs.<region>.amazonaws.com`; grant `firehose:PutRecord` +
    // `firehose:PutRecordBatch` on the stream ARN.
    role_arn: z.string().optional(),
  }).loose()

const EcsLogSchema = AwsCloudwatchLogGroupInputSchema.partial().extend({
  subscription_filters: EcsLogSubscriptionFilterSchema.array().default([]),
}).loose()

const EcsServiceLogSchema = EcsLogSchema.extend({
  // 'service' — one log group covers every container (default).
  // 'container' — one log group per container; service-level settings act
  // as inherited defaults for each container.
  scope: z.enum(['service', 'container']).default('service'),
})

export type EcsLogSubscriptionFilterType = z.output<
  typeof EcsLogSubscriptionFilterSchema
>
export type EcsLogType = z.output<typeof EcsLogSchema>
export type EcsServiceLogType = z.output<typeof EcsServiceLogSchema>

// ---------------------------------------------------------------------------
// Container — one entry under a service's `containers:` map. All containers
// under one service run in the same Fargate task and share the task ENI.
// ---------------------------------------------------------------------------

const EcsContainerSchema = z.object({
  name: z.string().optional().transform((v: string | undefined) => v as string),
  image: z.string(),
  essential: z.boolean().optional(),
  log: EcsLogSchema.optional(),
  // Convenience map → expanded into ECS's `environment: [{name, value}]`
  // array at task-definition render time. Values are stringified so YAML
  // booleans/numbers (`true`, `42`) work without manual quoting. Merges
  // with any pre-existing `environment` array; map entries win on
  // duplicate keys.
  envs: z.record(z.string(), z.unknown()).optional(),
}).loose()

// ---------------------------------------------------------------------------
// Service — one ECS service + task definition, with a dict of containers.
// ---------------------------------------------------------------------------

// Optional explicit networking. When `subnets` is provided, the service
// references those existing subnets instead of the on-demand VPC created by
// OnDemandResources; this also short-circuits VPC provisioning when every
// service in the stack supplies its own subnets.
const EcsServiceNetworkConfigurationSchema = z.object({
  subnets: z.string().array().optional(),
  security_groups: z.string().array().optional(),
  assign_public_ip: z.boolean().optional(),
})
export type EcsServiceNetworkConfigurationType = z.output<
  typeof EcsServiceNetworkConfigurationSchema
>

// Task definition — pass-through props for aws_ecs_task_definition plus the
// workload layer: container list. Anything set here is spread onto the
// TaskDefinition component verbatim.
const EcsTaskSchema = AwsEcsTaskDefinitionInputSchema.partial().extend({
  cpu: z.number().default(512).transform((v: number | undefined) => String(v)),
  memory: z.number().default(1024).transform((v: number | undefined) =>
    String(v)
  ),
  network_mode: z.string().default('awsvpc'),
  requires_compatibilities: z.string().array().default(['FARGATE']),
  skip_destroy: z.boolean().default(true),
  containers: z.record(z.string(), EcsContainerSchema),
}).loose()
export type EcsTaskType = z.output<typeof EcsTaskSchema>

// ---------------------------------------------------------------------------
// ALB target group — pass-through to aws_lb_target_group with sensible
// defaults for ECS-on-Fargate. The `name` defaults to the service name
// (set in parseEcsClusters); `port` defaults to `service.main_container_port`;
// `vpc_id` defaults to one resolved from the surrounding subnets in Alb.tsx.
// ---------------------------------------------------------------------------

// `z.preprocess(() => v ?? {}, ...)` is needed (instead of `.default({})`)
// because Zod's `.default()` returns its argument as-is and never runs it
// through the inner schema — so the nested field defaults below would be
// silently skipped. preprocess forces an empty object through the parser
// which then applies the per-field defaults.
const EcsTargetGroupHealthCheckSchema = z.object({
  path: z.string().default('/'),
  matcher: z.string().default('200-399'),
  // Tighter than AWS defaults (30s / 3) — favours fast deploys. Override
  // per-TG when long backends need slower probes.
  interval: z.number().default(10),
  timeout: z.number().default(5),
  healthy_threshold: z.number().default(2),
  unhealthy_threshold: z.number().default(2),
}).loose()

// ---------------------------------------------------------------------------
// ALB listener rule — nested under `target_group.rule`. Presence opts the
// service into the cluster's ALB. `path_patterns: ['/*']` (the default)
// makes the service the listener's default_action; any other value
// promotes it to a routed listener rule. At most one service per cluster
// may use `['/*']`.
// ---------------------------------------------------------------------------

// Accept either a single pattern string (YAML shorthand) or an explicit
// list; normalise to an array so downstream code sees `string[]`.
const PatternListSchema = z.preprocess(
  (v) => (typeof v === 'string' ? [v] : v),
  z.string().array(),
)

const EcsTargetGroupRuleSchema = z.object({
  // Optional human label for the rule — used in the rendered Terraform
  // resource _id and the AWS tag (`<source> <name>`). When omitted, the
  // composite derives a label from the first path_pattern + methods
  // (`/grafana/*` → `grafana`, `/*` → `root`, `/api/*` + `GET` →
  // `api_get`).
  name: z.string().optional(),
  priority: z.number().optional(),
  path_patterns: PatternListSchema.default(['/*']),
  host_headers: PatternListSchema.optional(),
  // HTTP methods to match (GET / POST / PUT / DELETE / …) — array
  // only, even for a single method. Rendered as an `http_request_method`
  // condition. Same `path_patterns` with different methods is allowed;
  // uniqueness is checked on (pattern × method) tuples.
  methods: z.string().array().optional(),
  // Opt-in Cognito auth in front of the forward action. Requires
  // `alb.cognito` to be configured on the cluster. Default is off.
  cognitoAuth: z.boolean().default(false),
}).loose()
export type EcsTargetGroupRuleType = z.output<typeof EcsTargetGroupRuleSchema>

// Sticky sessions on by default — most ECS workloads behind an ALB are
// stateful (Grafana, dashboards, app sessions). `lb_cookie` is the
// ALB-managed cookie (`AWSALB`); 1-day duration matches AWS's typical
// recommendation. Lambda-backed TGs accept the config but it's a no-op
// since invocations are stateless. Override per-TG with
// `stickiness: { enabled: false }` (or change `type` to `app_cookie`
// + supply `cookie_name` for application-managed sessions).
const EcsTargetGroupStickinessSchema = z.object({
  type: z.string().default('lb_cookie'),
  enabled: z.boolean().default(true),
  cookie_duration: z.number().default(86400),
  cookie_name: z.string().optional(),
}).loose()

const EcsTargetGroupSchema = AwsLbTargetGroupInputSchema.partial().extend({
  protocol: z.string().default('HTTP'),
  target_type: z.string().default('ip'),
  // Faster deploys — drop in-flight connections after 10s instead of the
  // AWS default 300s. Override per-TG when long-lived connections matter.
  deregistration_delay: z.string().default('10'),
  health_check: z.preprocess(
    (v) => v ?? {},
    EcsTargetGroupHealthCheckSchema,
  ),
  stickiness: z.preprocess(
    (v) => v ?? {},
    EcsTargetGroupStickinessSchema,
  ),
  // One or more listener rules. An empty `target_group: {}` still gets a
  // catch-all `[{ path_patterns: ['/*'] }]` via preprocess so the service
  // becomes the listener's default_action without extra config. Any rule
  // with `cognitoAuth: true` routes behind Cognito; any rule without
  // `/*` in its path_patterns renders as an `aws_lb_listener_rule`.
  rules: z.preprocess(
    (v) => Array.isArray(v) && v.length ? v : [{}],
    EcsTargetGroupRuleSchema.array(),
  ),
  // Name of an existing Lambda function to attach as the only target.
  // When set, the composite renders:
  //   - aws_lb_target_group with target_type='lambda' and
  //     name=`${cluster.name}-${tgKey}` (TG ARNs aren't transferable
  //     between ALBs, so we can't reuse an existing TG — but we can
  //     reuse the underlying Lambda).
  //   - data aws_lambda_function to fetch the function's ARN.
  //   - aws_lambda_permission letting ELB invoke it.
  //   - aws_lb_target_group_attachment binding Lambda → TG.
  lambda: z.string().optional(),
}).loose()
export type EcsTargetGroupType = z.output<typeof EcsTargetGroupSchema>

// ---------------------------------------------------------------------------
// EFS — per-service volumes auto-provisioned by the composite. Each map
// entry renders an aws_efs_file_system + per-subnet mount targets + a
// dedicated SG (NFS 2049 ingress from the task SGs, all-out egress) +
// optional backup policy and access point. The task definition gets a
// matching `volume` block with `transit_encryption: ENABLED`, and the
// named container gets a `mountPoints` entry on `container_path`.
//
// Resource id pattern: `<service.name>-<key>` (service.name is already
// cluster-prefixed by parseEcsClusters, so this is globally unique
// across multiple clusters in one stack).
// ---------------------------------------------------------------------------

const EcsEfsAccessPointSchema = z.object({
  posix_user: z.object({
    uid: z.number(),
    gid: z.number(),
    secondary_gids: z.number().array().optional(),
  }).optional(),
  root_directory: z.object({
    path: z.string().optional(),
    creation_info: z.object({
      owner_uid: z.number(),
      owner_gid: z.number(),
      permissions: z.string(),
    }).optional(),
  }).optional(),
}).loose()

const EcsEfsSchema = z.object({
  // Container in `task.containers` that this volume mounts into. Validated
  // at parse time against the service's container map.
  container: z.string(),
  // Mount path inside the container.
  container_path: z.string(),
  // EFS subdir mounted into the container. Ignored when `access_point` is
  // set (the access point's root_directory takes precedence).
  root_directory: z.string().default('/'),
  readonly: z.boolean().default(false),
  encrypted: z.boolean().default(true),
  performance_mode: z.enum(['generalPurpose', 'maxIO']).default(
    'generalPurpose',
  ),
  throughput_mode: z.enum(['bursting', 'elastic', 'provisioned']).default(
    'bursting',
  ),
  // AWS Backup. ENABLED is AWS's recommended default (daily snapshots, 35
  // day retention via the default plan). Set `DISABLED` to skip the
  // aws_efs_backup_policy resource entirely.
  backup_policy: z.enum(['ENABLED', 'DISABLED']).default('ENABLED'),
  // Optional EFS access point — required when the container runs as a
  // non-root uid that needs write access to a fresh FS (e.g. Grafana
  // runs as 472:472 and can't write to the FS root by default).
  access_point: EcsEfsAccessPointSchema.optional(),
}).loose()
export type EcsEfsType = z.output<typeof EcsEfsSchema>

const EcsServiceSchema = AwsEcsServiceInputSchema.partial().extend({
  name: z.string().optional().transform((v: string | undefined) => v as string),
  launch_type: z.string().default('FARGATE'),
  desired_count: z.number().default(1),
  main_container: z.string().default('app'),
  // Port the main container listens on; also the default ALB target group
  // port when a cluster-level `alb` is configured.
  main_container_port: z.number().default(80),
  // ECS Exec — on by default so `aws ecs execute-command` works out of the
  // box. The task role (provisioned by OnDemandResources) carries the
  // matching ssmmessages permissions.
  enable_execute_command: z.boolean().default(true),
  // Presence opts this service into the cluster's ALB. An empty
  // `target_group: {}` still fires — `name` / `port` / `vpc_id` / the
  // catch-all `rule.path_patterns: ['/*']` all default automatically.
  target_group: EcsTargetGroupSchema.optional(),
  network_configuration: EcsServiceNetworkConfigurationSchema.optional(),
  task: EcsTaskSchema,
  log: z.preprocess((v) => v ?? {}, EcsServiceLogSchema),
  // Per-service EFS volumes, keyed by logical volume name.
  efs: z.record(z.string(), EcsEfsSchema).default({}),
}).loose()

// ---------------------------------------------------------------------------
// Cluster — one AWS ECS cluster + services. Multiple clusters are declared
// as siblings under `ecs.clusters:`; "versioning" is done by naming (e.g.
// `oss`, `oss-v2`) rather than a dedicated attribute.
// ---------------------------------------------------------------------------

// CloudWatch Container Insights at the cluster level. See
// https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContainerInsights.html
//   enhanced — Container Insights with enhanced observability (default;
//              richer per-container + per-task metrics, higher cost)
//   enabled  — standard Container Insights
//   disabled — off (matches AWS's out-of-the-box behaviour)
const EcsContainerInsightsSchema = z.enum(['enhanced', 'enabled', 'disabled'])
  .default('enhanced')

// ---------------------------------------------------------------------------
// ALB — opt-in HTTP-only for now. Presence of the block triggers ALB
// provisioning. Subnets / security_groups use the same resolver contract as
// the service-level fields: verbatim IDs pass through, Name tags get a
// DataAws* lookup, empty falls back to the on-demand VPC.
// ---------------------------------------------------------------------------

// Cognito User Pool + App Client that gates any `rules[].cognitoAuth`
// rule. Single pool per cluster — no per-rule overrides in this pass.
const EcsAlbCognitoSchema = z.object({
  user_pool_arn: z.string(),
  user_pool_client_id: z.string(),
  user_pool_domain: z.string(),
  scope: z.string().default('openid'),
  session_cookie_name: z.string().default('AWSELBAuthSessionCookie'),
  session_timeout: z.number().default(604800),
  on_unauthenticated_request: z
    .enum(['authenticate', 'allow', 'deny'])
    .default('authenticate'),
}).loose()
export type EcsAlbCognitoType = z.output<typeof EcsAlbCognitoSchema>

const EcsAlbSchema = AwsLbInputSchema.partial().extend({
  internal: z.boolean().default(false),
  subnets: z.string().array().optional(),
  // Omit to auto-create an ALB SG that allows every `ports` entry from
  // 0.0.0.0/0. Supply either `sg-xxx` IDs or Name tags to use existing
  // security groups.
  security_groups: z.string().array().optional(),
  // Listener ports. One `aws_lb_listener` is rendered per entry. Ports
  // containing `443` (e.g. 443, 8443, 7443) render as HTTPS listeners;
  // everything else is HTTP. The ALB SG's ingress rules follow the same
  // port list when the on-demand SG is used.
  ports: z.number().array().default([80]),
  // TLS policy applied to every HTTPS listener. Default is AWS's current
  // TLS 1.3 recommendation — override when you need broader compatibility
  // (e.g. `ELBSecurityPolicy-2016-08`).
  ssl_policy: z.string().default('ELBSecurityPolicy-TLS13-1-2-2021-06'),
  // Route 53 A-alias records pointing at the ALB. Zones are looked up via
  // DataAwsRoute53Zone; `zoneNames` defaults to the two-label suffix of
  // each alternative name (e.g. `foo.bar.example.com` → `example.com`).
  // Certificate / HTTPS wiring is deferred to a follow-up.
  alternativeNames: z.string().array().optional(),
  zoneNames: z.string().array().optional(),
  // Cognito config used by any `rules[].cognitoAuth` rule on any service
  // in this cluster. Required at least once per cluster that opts in.
  cognito: EcsAlbCognitoSchema.optional(),
  // Additional target groups attached to this ALB, keyed by TG name.
  // Typically used to plug pre-existing target groups (supply `arn`)
  // into the composite's listener-rule + auth pipeline without having
  // a paired ECS service. A map-keyed entry can still render a new
  // `aws_lb_target_group` when `arn` is omitted.
  target_groups: z.record(z.string(), EcsTargetGroupSchema).default({}),
}).loose()
export type EcsAlbType = z.output<typeof EcsAlbSchema>

const EcsClusterSchema = AwsEcsClusterInputSchema.partial().extend({
  name: z.string().optional().transform((v: string | undefined) => v as string),
  containerInsights: EcsContainerInsightsSchema,
  alb: EcsAlbSchema.optional(),
  services: z.record(z.string(), EcsServiceSchema).default({}),
}).loose()

const EcsClustersSchema = z.record(z.string(), EcsClusterSchema)

export type EcsContainerType = z.output<typeof EcsContainerSchema>
export type EcsServiceType = z.output<typeof EcsServiceSchema>
export type EcsClusterType = z.output<typeof EcsClusterSchema>
export type EcsClustersType = z.output<typeof EcsClustersSchema>

// ---------------------------------------------------------------------------
// parseEcsClusters — mirrors parseEc2Servers / parseCloudfrontSites.
// Reads from `renderOptions.ecs.clusters` when no param is provided.
// ---------------------------------------------------------------------------

export function parseEcsClusters(
  clusters?: any,
): Record<string, EcsClusterType> {
  const renderOptions = getRenderOptions()
  const cfg = clusters || (renderOptions as any).ecs?.clusters
  if (!cfg) {
    throw new Error('ecs.clusters not configured')
  }

  // Apply cluster/service/container defaults that depend on the map key.
  Object.entries(cfg).forEach(([clusterKey, cluster]) => {
    // Loose equality `== null` catches both `null` and `undefined` — the YAML
    // parser emits `undefined` for an empty key (e.g. `oss-v2:` with no value).
    // Seed an empty object so the rest of this block still populates its
    // defaults.
    if (cluster == null) {
      cluster = {}
      cfg[clusterKey] = cluster
    }
    if (typeof cluster !== 'object') {
      throw new Error(
        `ecs.clusters.${clusterKey} must be an object (got ${typeof cluster}: ${
          JSON.stringify(cluster)
        })`,
      )
    }
    const c = cluster as any
    c.name ??= clusterKey
    c.services ??= {}
    Object.entries(c.services as Record<string, any>).forEach(
      ([serviceKey, service]) => {
        if (typeof service !== 'object' || service === null) return
        service.name ??= `${c.name}-${serviceKey}`
        service.task ??= {}
        const task = service.task
        // task.family defaults to service.name so aws_ecs_task_definition gets
        // a stable Terraform family name per service.
        task.family ??= service.name
        task.containers ??= {}
        Object.entries(task.containers as Record<string, any>).forEach(
          ([containerKey, container]) => {
            if (typeof container !== 'object' || container === null) return
            container.name ??= containerKey
            // Auto-mark the main container as essential when the user hasn't
            // set it. Sidecars are left undefined so the caller can opt in
            // explicitly (AWS defaults missing `essential` to true, which is
            // usually wrong for sidecars — set `essential: false` in YAML).
            if (
              container.essential === undefined &&
              container.name === service.main_container
            ) {
              container.essential = true
            }
          },
        )

        // Log config defaults + scope-container inheritance. When scope is
        // 'service' (default) the service block gets a default group name and
        // no container-level group is produced. When scope is 'container' the
        // service block becomes the inherited parent for each container's log
        // block — scalar fields fall through, subscription_filters
        // replace-on-set rather than concat (predictable, avoids AWS's 2-
        // filter per-group cap sneaking up on the user).
        service.log ??= {}
        const serviceLog = service.log
        serviceLog.scope ??= 'service'
        if (serviceLog.scope === 'service') {
          serviceLog.name ??= `/aws/ecs/${service.name}`
        } else {
          // Strip service-only keys; everything else becomes the default.
          const { scope: _scope, name: _name, ...inherited } = serviceLog
          Object.entries(task.containers as Record<string, any>).forEach(
            ([, container]) => {
              if (typeof container !== 'object' || container === null) return
              container.log ??= {}
              for (const [k, v] of Object.entries(inherited)) {
                if (container.log[k] !== undefined) continue
                container.log[k] = v && typeof v === 'object'
                  ? deepMerge(Array.isArray(v) ? [] : {}, v)
                  : v
              }
              container.log.name ??=
                `/aws/ecs/${service.name}/${container.name}`
            },
          )
        }
      },
    )
  })

  const normalised = EcsClustersSchema.parse(cfg) as Record<
    string,
    EcsClusterType
  >

  // Validate each service's main_container exists in task.containers.
  Object.values(normalised).forEach((cluster) => {
    Object.values(cluster.services).forEach((service) => {
      if (!service.task.containers[service.main_container]) {
        throw new Error(
          `Service '${service.name}' in cluster '${cluster.name}' references ` +
            `service.main_container='${service.main_container}' which is not ` +
            `in task.containers`,
        )
      }
      // Each EFS entry's `container` must exist in task.containers.
      for (const [key, entry] of Object.entries(service.efs ?? {})) {
        if (!service.task.containers[entry.container]) {
          throw new Error(
            `Service '${service.name}' efs.${key}.container='${entry.container}' ` +
              `is not in task.containers`,
          )
        }
      }
    })

    // Derive `alb.zoneNames` from `alb.alternativeNames` when omitted —
    // take the two-label suffix of each alias as the hosted-zone name.
    // The AlbAliases renderer turns these into DataAwsRoute53Zone lookups.
    if (cluster.alb?.alternativeNames?.length && !cluster.alb.zoneNames) {
      const zones: string[] = []
      for (const name of cluster.alb.alternativeNames) {
        const z = name.replace(/^\*\./, '').split('.').slice(-2).join('.')
        if (!zones.includes(z)) zones.push(z)
      }
      cluster.alb.zoneNames = zones
    }

    // Default the ALB target group name / port for every service that
    // opted in via `target_group`. `name` falls back to the service name
    // (max 32 chars per AWS), `port` to the main container port.
    // We re-parse `target_group` here so the inner schema's defaults
    // (protocol, target_type, health_check.*, rules[…].cognitoAuth)
    // actually apply — zod's `.default({})` returns the literal `{}`
    // without running it through the inner schema.
    // Stickiness is meaningless for lambda-backed TGs (each invocation is
    // stateless) — strip it so the rendered TG uses AWS's lambda default
    // (disabled) instead of carrying an `AWSALB` cookie no one uses.
    Object.values(cluster.services).forEach((service) => {
      if (!service.target_group) return
      service.target_group = EcsTargetGroupSchema.parse(service.target_group)
      const tg = service.target_group as any
      tg.name ??= service.name
      tg.port ??= service.main_container_port
      if (tg.lambda) delete tg.stickiness
    })

    // Re-parse each entry in `alb.target_groups` for the same reason —
    // apply inner defaults (protocol, health_check, rules catch-all, …).
    // The map key becomes the TG's default `name` so an entry like
    // `alb.target_groups.legacy-api: { arn: … }` references that TG
    // without extra config.
    if (cluster.alb?.target_groups) {
      for (
        const [tgKey, tg] of Object.entries(cluster.alb.target_groups)
      ) {
        cluster.alb.target_groups[tgKey] = EcsTargetGroupSchema.parse(tg)
        const parsed = cluster.alb.target_groups[tgKey] as any
        parsed.name ??= tgKey
        if (parsed.lambda) delete parsed.stickiness
      }
    }

    // (path_pattern × method) conflict check across every rule of every
    // ALB-attached source (services + alb.target_groups). Same pattern
    // with different methods is fine (e.g. GET /api/* on one TG, POST
    // /api/* on another) but identical (pattern, method) pairs would
    // make requests ambiguous. A rule without `methods` matches every
    // method — represented as `*` and only collides with another `*`
    // on the same pattern, not with method-specific siblings.
    if (cluster.alb) {
      const seen = new Map<string, string>()
      const visit = (owner: string, rules: any[]) => {
        for (const rule of rules) {
          const methods = rule.methods?.length ? rule.methods : ['*']
          for (const p of rule.path_patterns ?? []) {
            for (const m of methods) {
              const key = `${m}|${p}`
              const prev = seen.get(key)
              if (prev) {
                const where = m === '*' ? `'${p}'` : `'${m} ${p}'`
                throw new Error(
                  `Cluster '${cluster.name}' has conflicting ALB rule ` +
                    `${where} on '${prev}' and '${owner}'`,
                )
              }
              seen.set(key, owner)
            }
          }
        }
      }
      for (const service of Object.values(cluster.services)) {
        if (!service.target_group) continue
        visit(service.name as string, service.target_group.rules)
      }
      for (
        const [tgKey, tg] of Object.entries(cluster.alb.target_groups ?? {})
      ) {
        visit(`alb.target_groups.${tgKey}`, (tg as any).rules)
      }
    }

    // Any rule with cognitoAuth requires `alb.cognito` to be configured —
    // applies to both service TGs and `alb.target_groups[*]` rules.
    if (cluster.alb) {
      const checkCognito = (owner: string, rules: any[]) => {
        for (const rule of rules) {
          if (rule.cognitoAuth && !cluster.alb!.cognito) {
            throw new Error(
              `${owner} rule has cognitoAuth=true but cluster ` +
                `'${cluster.name}' has no alb.cognito configured`,
            )
          }
        }
      }
      for (const service of Object.values(cluster.services)) {
        if (!service.target_group) continue
        checkCognito(`Service '${service.name}'`, service.target_group.rules)
      }
      for (
        const [tgKey, tg] of Object.entries(cluster.alb.target_groups ?? {})
      ) {
        checkCognito(
          `alb.target_groups.${tgKey}`,
          (tg as any).rules,
        )
      }
    }
  })

  return normalised
}
