import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ECI_ELASTIC_CONTAINER_INSTANCE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.eci_elastic_container_instance;',
  },
  _width: 54.900000000000006,
  _height: 38.4,
}

export function EciElasticContainerInstance(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, ECI_ELASTIC_CONTAINER_INSTANCE)}
    />
  )
}
