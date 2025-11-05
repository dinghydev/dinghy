import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIQUID_LEVEL_ACTUATED_OFF_2 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.liquidLevelActuatedSwitch2;aspect=fixed;elSwitchState=off;',
  },
  _width: 75,
  _height: 32,
}

export function LiquidLevelActuatedOff2(props: NodeProps) {
  return (
    <Shape
      {...LIQUID_LEVEL_ACTUATED_OFF_2}
      {...props}
      _style={extendStyle(LIQUID_LEVEL_ACTUATED_OFF_2, props)}
    />
  )
}
