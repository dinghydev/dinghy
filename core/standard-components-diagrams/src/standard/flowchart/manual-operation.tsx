import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANUAL_OPERATION = {
  _style:
    'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=trapezoid;perimeter=trapezoidPerimeter;whiteSpace=wrap;size=0.23;arcSize=10;flipV=1;labelPosition=center;align=center;',
  _width: 100,
  _height: 60,
}

export function ManualOperation(props: DiagramNodeProps) {
  return <Shape {...MANUAL_OPERATION} {...props} />
}
