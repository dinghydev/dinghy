import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ITEM_FLOW_8 = {
  _style:
    'endArrow=none;html=1;edgeStyle=elbowEdgeStyle;elbow=horizontal;dashed=1;',
  _width: 4,
  _height: 370,
}

export function ItemFlow8(props: DiagramNodeProps) {
  return <Shape {...ITEM_FLOW_8} {...props} />
}
