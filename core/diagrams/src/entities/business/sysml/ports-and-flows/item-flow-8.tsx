import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ITEM_FLOW_8 = {
  _style: {
    entity:
      'endArrow=none;html=1;edgeStyle=elbowEdgeStyle;elbow=horizontal;dashed=1;',
  },
  _width: 4,
  _height: 370,
}

export function ItemFlow8(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ITEM_FLOW_8)} />
}
