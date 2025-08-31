import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARROW_NE = {
  _style:
    'shape=mxgraph.signs.travel.arrow_ne;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 98,
}

export function ArrowNe(props: DiagramNodeProps) {
  return (
    <Shape {...ARROW_NE} {...props} _style={extendStyle(ARROW_NE, props)} />
  )
}
