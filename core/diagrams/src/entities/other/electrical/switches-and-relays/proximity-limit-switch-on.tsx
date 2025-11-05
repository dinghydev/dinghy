import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROXIMITY_LIMIT_SWITCH_ON = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.proximityLimitSwitch2;elSwitchState=on;',
  },
  _width: 75,
  _height: 55,
}

export function ProximityLimitSwitchOn(props: NodeProps) {
  return (
    <Shape
      {...PROXIMITY_LIMIT_SWITCH_ON}
      {...props}
      _style={extendStyle(PROXIMITY_LIMIT_SWITCH_ON, props)}
    />
  )
}
