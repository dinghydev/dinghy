import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TWO_WAY_ARROW_HORIZONTAL = {
  _style: {
    entity:
      'shape=mxgraph.arrows.two_way_arrow_horizontal;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _original_width: 96,
  _original_height: 60,
}

export function TwoWayArrowHorizontal(props: DiagramNodeProps) {
  return (
    <Shape
      {...TWO_WAY_ARROW_HORIZONTAL}
      {...props}
      _style={extendStyle(TWO_WAY_ARROW_HORIZONTAL, props)}
    />
  )
}
