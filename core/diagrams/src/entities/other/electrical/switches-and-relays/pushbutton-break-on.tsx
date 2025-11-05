import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PUSHBUTTON_BREAK_ON = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.pushbuttonBreak2;elSwitchState=on;',
  },
  _width: 75,
  _height: 40,
}

export function PushbuttonBreakOn(props: NodeProps) {
  return (
    <Shape
      {...PUSHBUTTON_BREAK_ON}
      {...props}
      _style={extendStyle(PUSHBUTTON_BREAK_ON, props)}
    />
  )
}
