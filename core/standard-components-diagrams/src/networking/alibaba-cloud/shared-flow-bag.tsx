import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SHARED_FLOW_BAG = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.shared_flow_bag;',
  },
  _original_width: 54.900000000000006,
  _original_height: 35.099999999999994,
}

export function SharedFlowBag(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHARED_FLOW_BAG}
      {...props}
      _style={extendStyle(SHARED_FLOW_BAG, props)}
    />
  )
}
