import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LEFT_AND_UP_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.left_and_up_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _original_width: 96,
  _original_height: 96,
}

export function LeftAndUpArrow(props: NodeProps) {
  return (
    <Shape
      {...LEFT_AND_UP_ARROW}
      {...props}
      _style={extendStyle(LEFT_AND_UP_ARROW, props)}
    />
  )
}
