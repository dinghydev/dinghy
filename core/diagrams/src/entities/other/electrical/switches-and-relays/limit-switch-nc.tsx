import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIMIT_SWITCH_NC = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.limitSwitch;elSwitchState=on;',
  },
  _width: 75,
  _height: 25,
}

export function LimitSwitchNc(props: NodeProps) {
  return (
    <Shape
      {...LIMIT_SWITCH_NC}
      {...props}
      _style={extendStyle(LIMIT_SWITCH_NC, props)}
    />
  )
}
