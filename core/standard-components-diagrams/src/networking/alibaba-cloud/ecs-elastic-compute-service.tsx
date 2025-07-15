import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ECS_ELASTIC_COMPUTE_SERVICE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ecs_elastic_compute_service;',
  _width: 48.6,
  _height: 45.3,
}

export function EcsElasticComputeService(props: DiagramNodeProps) {
  return <Shape {...ECS_ELASTIC_COMPUTE_SERVICE} {...props} />
}
