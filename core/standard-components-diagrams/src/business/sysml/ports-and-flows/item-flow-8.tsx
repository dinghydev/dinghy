import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ITEM_FLOW_8 = {
  _style: {
    entity:
      'endArrow=none;html=1;edgeStyle=elbowEdgeStyle;elbow=horizontal;dashed=1;',
  },
  _width: 4,
  _height: 370,
}

export function ItemFlow8(props: DiagramNodeProps) {
  return (
    <Shape
      {...ITEM_FLOW_8}
      {...props}
      _style={extendStyle(ITEM_FLOW_8, props)}
    />
  )
}
