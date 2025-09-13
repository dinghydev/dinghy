import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TWO_WAY_ARROW_HORIZONTAL = {
  _style: {
    entity:
      'shape=mxgraph.arrows.two_way_arrow_horizontal;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _width: 96,
  _height: 60,
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
