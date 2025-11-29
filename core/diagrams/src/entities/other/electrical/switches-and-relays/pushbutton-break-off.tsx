import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PUSHBUTTON_BREAK_OFF = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.pushbuttonBreak2;elSwitchState=off;',
  },
  _width: 75,
  _height: 40,
}

export function PushbuttonBreakOff(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PUSHBUTTON_BREAK_OFF)} />
}
