import { type NodeProps, toId } from '@dinghy/base-components'
import { AwsEcsService } from '../../services/ecs/AwsEcsService.tsx'
import { useAwsEcsCluster } from '../../services/ecs/AwsEcsCluster.tsx'
import { useAwsEcsTaskDefinition } from '../../services/ecs/AwsEcsTaskDefinition.tsx'
import { useAwsLbTargetGroup } from '../../services/elbv2/AwsLbTargetGroup.tsx'
import { resolveSubnets } from '../vpc/resolveSubnets.tsx'
import { resolveSecurityGroups } from '../vpc/resolveSecurityGroups.tsx'
import { EcsTask } from './EcsTask.tsx'
import { LogGroups } from './LogGroups.tsx'
import { Efs } from './Efs.tsx'
import { ServiceOutput } from './ServiceOutput.tsx'
import type { EcsServiceType } from './types.ts'

// One ECS service + its task definition + log groups. Subnets / security
// groups are resolved via the vpc helpers. When the service opted into the
// cluster's ALB via `alb_rule`, its main container is registered in the
// matching target group (looked up via `useAwsLbTargetGroup` — Alb.tsx
// renders the TG as a sibling under the cluster).
export function EcsService(
  { service, ...props }: NodeProps & { service: EcsServiceType },
) {
  const EcsServiceComponent =
    props._components?.ecsService as typeof AwsEcsService || AwsEcsService
  const { taskDefinition } = useAwsEcsTaskDefinition()
  const { ecsCluster } = useAwsEcsCluster()

  const isPrivate = service.network_configuration?.assign_public_ip === false
  const { subnetIds, Subnets } = resolveSubnets(
    service.network_configuration?.subnets ?? null,
    isPrivate,
  )
  const { securityGroupIds, SecurityGroups } = resolveSecurityGroups(
    service.network_configuration?.security_groups ?? null,
    isPrivate,
  )
  const effectiveNetworkConfiguration = () => ({
    ...(service.network_configuration ?? {}),
    subnets: subnetIds(),
    security_groups: securityGroupIds(),
  })

  // Opt-in ALB wiring: a `target_group` block on the service means
  // "attach me to the cluster's ALB". The TG is rendered by <Alb> under
  // the cluster, so a tree-walk via `useAwsLbTargetGroup` finds it by the
  // service-scoped id.
  const albLoadBalancer = service.target_group
    ? (() => {
      const { targetGroup } = useAwsLbTargetGroup(toId(service.name!))
      return {
        // Deferred so the proxy resolves `.arn` at render time rather than
        // at JSX construction time (when the TG may not yet be in the tree).
        load_balancer: () => [{
          target_group_arn: targetGroup.arn,
          container_name: service.main_container,
          container_port: service.main_container_port,
        }],
      }
    })()
    : {}

  return (
    <EcsServiceComponent
      task_definition={taskDefinition.arn}
      cluster={ecsCluster.arn}
      {...service as any}
      network_configuration={effectiveNetworkConfiguration}
      {...albLoadBalancer}
      {...props}
    >
      <EcsTask service={service} />
      <LogGroups service={service} />
      <Subnets />
      <SecurityGroups />
      <Efs service={service} />
      <ServiceOutput service={service} />
    </EcsServiceComponent>
  )
}
