import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TERMINAL_2 = {
  _style:
    'verticalLabelPosition=middle;shadow=0;dashed=0;align=center;html=1;verticalAlign=middle;strokeWidth=1;shape=ellipse;fontSize=50;fontStyle=1;perimeter=ellipsePerimeter;whiteSpace=wrap;',
  _width: 130,
  _height: 130,
}

export function Terminal2(props: DiagramNodeProps) {
  return <Shape {...TERMINAL_2} {...props} />
}
