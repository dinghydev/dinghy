import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SHARED_FLOW_BAG = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.shared_flow_bag;',
  },
  _width: 54.900000000000006,
  _height: 35.099999999999994,
}

export function SharedFlowBag(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SHARED_FLOW_BAG)} />
}
