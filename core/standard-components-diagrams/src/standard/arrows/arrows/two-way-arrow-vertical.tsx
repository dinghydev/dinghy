import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TWO_WAY_ARROW_VERTICAL = {
  _style: {
    entity:
      'shape=mxgraph.arrows.two_way_arrow_vertical;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _original_width: 60,
  _original_height: 96,
}

export function TwoWayArrowVertical(props: DiagramNodeProps) {
  return (
    <Shape
      {...TWO_WAY_ARROW_VERTICAL}
      {...props}
      _style={extendStyle(TWO_WAY_ARROW_VERTICAL, props)}
    />
  )
}
