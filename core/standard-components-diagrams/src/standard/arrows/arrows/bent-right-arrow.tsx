import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BENT_RIGHT_ARROW = {
  _style:
    'shape=mxgraph.arrows.bent_right_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  _width: 60,
  _height: 60,
}

export function BentRightArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...BENT_RIGHT_ARROW}
      {...props}
      _style={extendStyle(BENT_RIGHT_ARROW, props)}
    />
  )
}
