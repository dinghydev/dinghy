import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRAPEZOID = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.parallelogram;dx=15;fillColor=#10739E;strokeColor=none;',
  _width: 100,
  _height: 70,
}

export function Trapezoid(props: DiagramNodeProps) {
  return (
    <Shape {...TRAPEZOID} {...props} _style={extendStyle(TRAPEZOID, props)} />
  )
}
