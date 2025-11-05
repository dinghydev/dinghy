import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SLENDER_LEFT_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.slender_left_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _width: 97,
  _height: 60,
}

export function SlenderLeftArrow(props: NodeProps) {
  return (
    <Shape
      {...SLENDER_LEFT_ARROW}
      {...props}
      _style={extendStyle(SLENDER_LEFT_ARROW, props)}
    />
  )
}
