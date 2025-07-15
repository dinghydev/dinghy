import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROTATING_MACHINE = {
  _style:
    'verticalLabelPosition=middle;shadow=0;dashed=0;align=center;html=1;verticalAlign=middle;strokeWidth=1;shape=ellipse;fontSize=32;perimeter=ellipsePerimeter;',
  _width: 100,
  _height: 100,
}

export function RotatingMachine(props: DiagramNodeProps) {
  return <Shape {...ROTATING_MACHINE} {...props} />
}
