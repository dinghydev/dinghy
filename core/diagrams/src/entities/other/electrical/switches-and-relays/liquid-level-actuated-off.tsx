import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIQUID_LEVEL_ACTUATED_OFF = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.liquidLevelActuatedSwitch;aspect=fixed;elSwitchState=off;',
  },
  _width: 75,
  _height: 30,
}

export function LiquidLevelActuatedOff(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, LIQUID_LEVEL_ACTUATED_OFF)} />
  )
}
