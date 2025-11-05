import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ECS_ELASTIC_COMPUTE_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ecs_elastic_compute_service;',
  },
  _original_width: 48.6,
  _original_height: 45.3,
}

export function EcsElasticComputeService(props: NodeProps) {
  return (
    <Shape
      {...ECS_ELASTIC_COMPUTE_SERVICE}
      {...props}
      _style={extendStyle(ECS_ELASTIC_COMPUTE_SERVICE, props)}
    />
  )
}
