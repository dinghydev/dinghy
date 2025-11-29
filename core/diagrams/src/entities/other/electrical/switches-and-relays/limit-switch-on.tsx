import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIMIT_SWITCH_ON = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.limitSwitch2;elSwitchState=on;',
  },
  _width: 75,
  _height: 19,
}

export function LimitSwitchOn(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LIMIT_SWITCH_ON)} />
}
