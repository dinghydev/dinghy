import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIQUID_LEVEL_ACTUATED_ON = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.liquidLevelActuatedSwitch;aspect=fixed;elSwitchState=on;',
  },
  _width: 75,
  _height: 30,
}

export function LiquidLevelActuatedOn(props: NodeProps) {
  return (
    <Shape
      {...LIQUID_LEVEL_ACTUATED_ON}
      {...props}
      _style={extendStyle(LIQUID_LEVEL_ACTUATED_ON, props)}
    />
  )
}
