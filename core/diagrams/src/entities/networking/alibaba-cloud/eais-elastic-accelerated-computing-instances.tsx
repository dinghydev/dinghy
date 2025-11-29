import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EAIS_ELASTIC_ACCELERATED_COMPUTING_INSTANCES = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.eais_elastic_accelerated_computing_instances;',
  },
  _width: 51.9,
  _height: 36,
}

export function EaisElasticAcceleratedComputingInstances(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, EAIS_ELASTIC_ACCELERATED_COMPUTING_INSTANCES)}
    />
  )
}
