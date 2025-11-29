import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INERTIA_SWITCH_OFF = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.inertiaSwitch2;elSwitchState=off;',
  },
  _width: 75,
  _height: 19,
}

export function InertiaSwitchOff(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INERTIA_SWITCH_OFF)} />
}
