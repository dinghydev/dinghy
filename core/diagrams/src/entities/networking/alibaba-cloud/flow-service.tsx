import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLOW_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.flow_service;',
  },
  _width: 39.900000000000006,
  _height: 52.5,
}

export function FlowService(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FLOW_SERVICE)} />
}
