import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LIQUID_LEVEL_ACTUATED_OFF_2 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.liquidLevelActuatedSwitch2;aspect=fixed;elSwitchState=off;',
  },
  _original_width: 75,
  _original_height: 32,
}

export function LiquidLevelActuatedOff2(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIQUID_LEVEL_ACTUATED_OFF_2}
      {...props}
      _style={extendStyle(LIQUID_LEVEL_ACTUATED_OFF_2, props)}
    />
  )
}
