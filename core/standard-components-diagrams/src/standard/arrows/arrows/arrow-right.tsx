import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARROW_RIGHT = {
  _style: {
    entity:
      'shape=mxgraph.arrows.arrow_right;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _width: 97,
  _height: 70,
}

export function ArrowRight(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARROW_RIGHT}
      {...props}
      _style={extendStyle(ARROW_RIGHT, props)}
    />
  )
}
