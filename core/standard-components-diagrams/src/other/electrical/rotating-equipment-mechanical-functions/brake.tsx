import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BRAKE = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=trapezoid;perimeter=none;',
  _width: 75,
  _height: 25,
}

export function Brake(props: DiagramNodeProps) {
  return <Shape {...BRAKE} {...props} />
}
