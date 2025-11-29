import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MANUAL_SWITCH_OFF = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.manualSwitch2;elSwitchState=off;',
  },
  _width: 75,
  _height: 18,
}

export function ManualSwitchOff(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MANUAL_SWITCH_OFF)} />
}
