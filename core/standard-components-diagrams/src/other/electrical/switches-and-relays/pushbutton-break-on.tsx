import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PUSHBUTTON_BREAK_ON = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.pushbuttonBreak2;elSwitchState=on;',
  },
  _original_width: 75,
  _original_height: 40,
}

export function PushbuttonBreakOn(props: DiagramNodeProps) {
  return (
    <Shape
      {...PUSHBUTTON_BREAK_ON}
      {...props}
      _style={extendStyle(PUSHBUTTON_BREAK_ON, props)}
    />
  )
}
