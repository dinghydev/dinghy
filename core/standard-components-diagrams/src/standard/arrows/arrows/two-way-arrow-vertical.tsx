import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TWO_WAY_ARROW_VERTICAL = {
  _style:
    'shape=mxgraph.arrows.two_way_arrow_vertical;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  _width: 60,
  _height: 96,
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
