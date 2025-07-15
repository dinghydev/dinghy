import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PUSHBUTTON_MAKE = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.pushbuttonMakeSwitch2;elSwitchState=1;',
  _width: 75,
  _height: 53,
}

export function PushbuttonMake(props: DiagramNodeProps) {
  return <Shape {...PUSHBUTTON_MAKE} {...props} />
}
