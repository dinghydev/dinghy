import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PUSHBUTTON_MAKE_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.pushbuttonMakeSwitch2;elSwitchState=2;',
  },
  _width: 75,
  _height: 53,
}

export function PushbuttonMake2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PUSHBUTTON_MAKE_2)} />
}
