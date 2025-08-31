import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RESISTOR_NONLINEAR = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.nonlinear_resistor;',
  _width: 100,
  _height: 60,
}

export function ResistorNonlinear(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESISTOR_NONLINEAR}
      {...props}
      _style={extendStyle(RESISTOR_NONLINEAR, props)}
    />
  )
}
