import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ECI_ELASTIC_CONTAINER_INSTANCE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.eci_elastic_container_instance;',
  _width: 54.900000000000006,
  _height: 38.4,
}

export function EciElasticContainerInstance(props: DiagramNodeProps) {
  return <Shape {...ECI_ELASTIC_CONTAINER_INSTANCE} {...props} />
}
