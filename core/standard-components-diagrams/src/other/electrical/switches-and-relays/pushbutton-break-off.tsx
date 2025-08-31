import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PUSHBUTTON_BREAK_OFF = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.pushbuttonBreak2;elSwitchState=off;',
  _width: 75,
  _height: 40,
}

export function PushbuttonBreakOff(props: DiagramNodeProps) {
  return (
    <Shape
      {...PUSHBUTTON_BREAK_OFF}
      {...props}
      _style={extendStyle(PUSHBUTTON_BREAK_OFF, props)}
    />
  )
}
