import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SLENDER_TWO_WAY_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.slender_two_way_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _original_width: 97,
  _original_height: 60,
}

export function SlenderTwoWayArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...SLENDER_TWO_WAY_ARROW}
      {...props}
      _style={extendStyle(SLENDER_TWO_WAY_ARROW, props)}
    />
  )
}
