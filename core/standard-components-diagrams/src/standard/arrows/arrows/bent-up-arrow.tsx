import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BENT_UP_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.bent_up_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _width: 97,
  _height: 83,
}

export function BentUpArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...BENT_UP_ARROW}
      {...props}
      _style={extendStyle(BENT_UP_ARROW, props)}
    />
  )
}
