import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SLENDER_TWO_WAY_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.slender_two_way_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _width: 97,
  _height: 60,
}

export function SlenderTwoWayArrow(props: NodeProps) {
  return (
    <Shape
      {...SLENDER_TWO_WAY_ARROW}
      {...props}
      _style={extendStyle(SLENDER_TWO_WAY_ARROW, props)}
    />
  )
}
