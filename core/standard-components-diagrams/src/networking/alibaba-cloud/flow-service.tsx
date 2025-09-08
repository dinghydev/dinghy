import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FLOW_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.flow_service;',
  },
  _original_width: 39.900000000000006,
  _original_height: 52.5,
}

export function FlowService(props: DiagramNodeProps) {
  return (
    <Shape
      {...FLOW_SERVICE}
      {...props}
      _style={extendStyle(FLOW_SERVICE, props)}
    />
  )
}
