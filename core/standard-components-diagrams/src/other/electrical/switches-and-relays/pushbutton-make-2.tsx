import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PUSHBUTTON_MAKE_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.pushbuttonMakeSwitch2;elSwitchState=2;',
  },
  _width: 75,
  _height: 53,
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
