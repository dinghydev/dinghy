import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PUSHBUTTON_2_CIRCUIT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.pushbuttonTwoCircuitSwitch2;elSwitchState=1;',
  },
  _width: 75,
  _height: 73,
}

export function Pushbutton2Circuit(props: DiagramNodeProps) {
  return (
    <Shape
      {...PUSHBUTTON_2_CIRCUIT}
      {...props}
      _style={extendStyle(PUSHBUTTON_2_CIRCUIT, props)}
    />
  )
}
