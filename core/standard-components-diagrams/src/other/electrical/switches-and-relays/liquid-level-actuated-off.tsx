import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LIQUID_LEVEL_ACTUATED_OFF = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.liquidLevelActuatedSwitch;aspect=fixed;elSwitchState=off;',
  },
  _original_width: 75,
  _original_height: 30,
}

export function LiquidLevelActuatedOff(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIQUID_LEVEL_ACTUATED_OFF}
      {...props}
      _style={extendStyle(LIQUID_LEVEL_ACTUATED_OFF, props)}
    />
  )
}
