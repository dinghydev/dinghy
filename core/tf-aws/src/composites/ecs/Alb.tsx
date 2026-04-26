import { deepResolve, type NodeProps, toId } from '@dinghy/base-components'
import { useLogBucket } from '../../foundation/LogBucket.tsx'
import { AwsLb } from '../../services/elbv2/AwsLb.tsx'
import { useAwsSubnet } from '../../services/vpc/AwsSubnet.tsx'
import { resolveSecurityGroups } from '../vpc/resolveSecurityGroups.tsx'
import { resolveSubnets } from '../vpc/resolveSubnets.tsx'
import { AlbAliases } from './AlbAliases.tsx'
import { AlbListeners } from './AlbListeners.tsx'
import { AlbSsl } from './AlbSsl.tsx'
import { AlbTargetGroups } from './AlbTargetGroups.tsx'
import { albSgId } from './ids.ts'
import type { EcsClusterType } from './types.ts'

// One ALB per cluster with target groups for every opted-in service +
// named `alb.target_groups` entry, and one listener per `alb.ports`
// entry. Opt-in at the cluster level — `cluster.alb` presence drives
// rendering. The TG / listener / DNS / SSL / log pieces each live in
// their own sibling files.
export function Alb(
  { cluster, ...props }: NodeProps & { cluster: EcsClusterType },
) {
  const alb = cluster.alb!
  const isPrivate = alb.internal ?? false
  const ports = alb.ports ?? [80]
  const AwsLbComponent = props._components?.alb as typeof AwsLb || AwsLb
  // `useAwsSubnet` tree-walks to find any AwsSubnet node (including
  // DataAwsSubnet nodes, which render as `<AwsSubnet _category='data' ...>`)
  // — either the on-demand VPC's subnets or the DataAwsSubnet lookups that
  // resolveSubnets renders when the user supplies Name-tag subnets. Its
  // `.vpc_id` proxy resolves to the right `${…}` reference at render time.
  const { awsSubnet } = useAwsSubnet()
  const vpcIdRef = awsSubnet.vpc_id

  // Subnets — internet-facing ALB defaults to the on-demand VPC's public
  // subnets; an `internal: true` ALB falls back to private. Users can
  // override with either verbatim `subnet-*` IDs or Name tags.
  const { subnetIds, Subnets } = resolveSubnets(
    alb.subnets ?? null,
    isPrivate,
  )

  // Security groups — resolve user-supplied ones, or auto-create a fresh
  // ALB SG with one ingress rule per listener port (egress all-out).
  const { securityGroupIds, SecurityGroups } = resolveSecurityGroups(
    alb.security_groups ?? null,
    isPrivate,
    {
      id: albSgId(cluster),
      title: `${cluster.name} ALB SG`,
      namePrefix: `${toId(cluster.name!)}-alb-`,
      description: `ECS cluster ${cluster.name} ALB - inbound ${
        ports.join('/')
      }`,
      vpcId: vpcIdRef,
      ingress: ports.map((port) => ({ port })),
    },
  )

  // When the stack defines a `logBucket` block, the AwsStack auto-renders
  // a LogBucket node; wire ALB access logs to it. The hook returns a
  // Proxy that's truthy even when the tag is absent, so the existence
  // check has to run inside the resolver where `.bucket()` either returns
  // a real value or undefined. AWS still requires a bucket policy granting
  // the ELB log-delivery principal `s3:PutObject` — left to the user /
  // LogBucket composite to configure.
  const { logBucket } = useLogBucket(undefined, undefined, true)
  const accessLogs = () => {
    const bucket = deepResolve(logBucket.bucket)
    if (!bucket) return undefined
    return { bucket, prefix: `alb/${cluster.name}`, enabled: true }
  }

  // Auto-generate an ACM cert when the stack wants HTTPS and the user
  // hasn't provided one. Needs alternativeNames to know what to cover.
  // ACM's data source can't look up by ARN, so when the user supplies
  // their own `certificate_arn` we skip AlbSsl entirely and let the
  // listener reference that ARN directly.
  function needsAutoCert(c: EcsClusterType): boolean {
    const a = c.alb!
    if ((a as any).certificate_arn) return false
    if (!a.alternativeNames?.length) return false
    return (a.ports ?? [80]).some((p) => String(p).includes('443'))
  }

  return (
    <AwsLbComponent
      name={cluster.name}
      _display='entity'
      access_logs={accessLogs}
      {...stripComposite(alb)}
      security_groups={securityGroupIds}
      subnets={subnetIds}
      {...props}
    >
      <Subnets />
      <SecurityGroups />
      <AlbTargetGroups cluster={cluster} />
      <AlbListeners cluster={cluster} />
      <AlbAliases cluster={cluster} />
      {needsAutoCert(cluster) && <AlbSsl cluster={cluster} />}
    </AwsLbComponent>
  )
}

// Strip composite-only fields before spreading onto AwsLb — these aren't
// in the aws_lb schema and would leak through zod's `.loose()`.
function stripComposite(alb: any): any {
  const {
    target_groups: _tg,
    alternativeNames: _a,
    zoneNames: _z,
    cognito: _c,
    certificate_arn: _ca,
    ssl_policy: _sp,
    ports: _p,
    ...rest
  } = alb
  return rest
}
