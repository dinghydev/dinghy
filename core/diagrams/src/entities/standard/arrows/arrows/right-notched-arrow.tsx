import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RIGHT_NOTCHED_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.right_notched_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _width: 96,
  _height: 70,
}

export function RightNotchedArrow(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RIGHT_NOTCHED_ARROW)} />
}
