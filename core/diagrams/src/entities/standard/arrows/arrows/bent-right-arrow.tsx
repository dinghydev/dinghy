import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BENT_RIGHT_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.bent_right_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _original_width: 97,
  _original_height: 97,
}

export function BentRightArrow(props: NodeProps) {
  return (
    <Shape
      {...BENT_RIGHT_ARROW}
      {...props}
      _style={extendStyle(BENT_RIGHT_ARROW, props)}
    />
  )
}
