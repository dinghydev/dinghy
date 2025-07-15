import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FLOW_SERVICE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.flow_service;',
  _width: 39.900000000000006,
  _height: 52.5,
}

export function FlowService(props: DiagramNodeProps) {
  return <Shape {...FLOW_SERVICE} {...props} />
}
