import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PUSHBUTTON_2_CIRCUIT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.pushbuttonTwoCircuitSwitch2;elSwitchState=1;',
  },
  _original_width: 75,
  _original_height: 73,
}

export function Pushbutton2Circuit(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PUSHBUTTON_2_CIRCUIT)} />
}
