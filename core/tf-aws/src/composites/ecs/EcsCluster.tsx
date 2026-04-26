import { type NodeProps } from '@dinghy/base-components'
import { AwsEcsCluster } from '../../services/ecs/AwsEcsCluster.tsx'
import { Alb } from './Alb.tsx'
import { EcsService } from './EcsService.tsx'
import type { EcsClusterType } from './types.ts'

// One ECS cluster + its services. The inner AwsEcsCluster node lets child
// <EcsService> components resolve their cluster reference via
// `useAwsEcsCluster()`. When `cluster.alb` is set, an HTTP ALB + per-service
// target groups are rendered alongside the services.
export function EcsCluster(
  props: NodeProps & { cluster: EcsClusterType },
) {
  const { cluster } = props
  const services = Object.values(cluster.services)

  const ClusterComponent = props._components?.cluster as typeof AwsEcsCluster ||
    AwsEcsCluster

  return (
    <ClusterComponent
      _title={cluster.name}
      _direction='vertical'
      setting={[{
        name: 'containerInsights',
        value: cluster.containerInsights,
      }]}
      {...cluster}
    >
      {cluster.alb && <Alb cluster={cluster} />}
      {services.map((service) => (
        <EcsService key={service.name} service={service} />
      ))}
    </ClusterComponent>
  )
}
