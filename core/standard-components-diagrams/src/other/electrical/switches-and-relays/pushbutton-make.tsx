import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PUSHBUTTON_MAKE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.pushbuttonMakeSwitch2;elSwitchState=1;',
  },
  _width: 75,
  _height: 53,
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
