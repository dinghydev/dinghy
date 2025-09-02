import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PUSHBUTTON_MAKE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.pushbuttonMakeSwitch2;elSwitchState=1;',
  },
  _original_width: 75,
  _original_height: 53,
}

export function PushbuttonMake(props: DiagramNodeProps) {
  return (
    <Shape
      {...PUSHBUTTON_MAKE}
      {...props}
      _style={extendStyle(PUSHBUTTON_MAKE, props)}
    />
  )
}
