import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIMIT_SWITCH_OFF = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.limitSwitch2;elSwitchState=off;',
  },
  _width: 75,
  _height: 19,
}

export function LimitSwitchOff(props: NodeProps) {
  return (
    <Shape
      {...LIMIT_SWITCH_OFF}
      {...props}
      _style={extendStyle(LIMIT_SWITCH_OFF, props)}
    />
  )
}
