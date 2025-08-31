import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PUSHBUTTON_2_CIRCUIT_2 = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.pushbuttonTwoCircuitSwitch2;elSwitchState=2;',
  _width: 75,
  _height: 73,
}

export function Pushbutton2Circuit2(props: DiagramNodeProps) {
  return (
    <Shape
      {...PUSHBUTTON_2_CIRCUIT_2}
      {...props}
      _style={extendStyle(PUSHBUTTON_2_CIRCUIT_2, props)}
    />
  )
}
