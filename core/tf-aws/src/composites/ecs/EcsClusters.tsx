import { type NodeProps, Shape } from '@dinghy/base-components'
import { EcsCluster } from './EcsCluster.tsx'
import { OnDemandResources } from './OnDemandResources.tsx'
import { parseEcsClusters } from './types.ts'

// EcsClusters — top-level composite.
//
// Reads `ecs.clusters` from the stack config, renders on-demand shared
// resources (VPC + IAM execution role) once, then one <EcsCluster> per
// config entry. `_components` stays in props; the framework propagates it
// to descendants automatically.
export function EcsClusters(props: NodeProps) {
  const clusters = parseEcsClusters(props.clusters as any)
  const ClustersComponent = props._components?.clusters as typeof Shape ||
    Shape
  return (
    <ClustersComponent _direction='vertical' {...props}>
      {Object.values(clusters).map((cluster) => (
        <EcsCluster key={cluster.name} cluster={cluster} />
      ))}
      <OnDemandResources clusters={clusters} />
      {props.children}
    </ClustersComponent>
  )
}
