import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CIRCUIT_TERMINAL = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=ellipse;perimeter=ellipsePerimeter;',
  _width: 15,
  _height: 15,
}

export function CircuitTerminal(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCUIT_TERMINAL}
      {...props}
      _style={extendStyle(CIRCUIT_TERMINAL, props)}
    />
  )
}
