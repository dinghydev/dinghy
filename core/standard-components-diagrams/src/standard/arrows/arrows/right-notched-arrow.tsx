import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RIGHT_NOTCHED_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.right_notched_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _original_width: 96,
  _original_height: 70,
}

export function RightNotchedArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...RIGHT_NOTCHED_ARROW}
      {...props}
      _style={extendStyle(RIGHT_NOTCHED_ARROW, props)}
    />
  )
}
