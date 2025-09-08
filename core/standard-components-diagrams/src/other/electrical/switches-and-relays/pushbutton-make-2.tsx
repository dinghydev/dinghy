import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PUSHBUTTON_MAKE_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.pushbuttonMakeSwitch2;elSwitchState=2;',
  },
  _original_width: 75,
  _original_height: 53,
}

export function PushbuttonMake2(props: DiagramNodeProps) {
  return (
    <Shape
      {...PUSHBUTTON_MAKE_2}
      {...props}
      _style={extendStyle(PUSHBUTTON_MAKE_2, props)}
    />
  )
}
