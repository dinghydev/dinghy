import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PUSHBUTTON_BREAK_ON = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.pushbuttonBreak2;elSwitchState=on;',
  _width: 75,
  _height: 40,
}

export function PushbuttonBreakOn(props: DiagramNodeProps) {
  return <Shape {...PUSHBUTTON_BREAK_ON} {...props} />
}
