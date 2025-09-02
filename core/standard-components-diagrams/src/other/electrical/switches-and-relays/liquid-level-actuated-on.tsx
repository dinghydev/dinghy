import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIQUID_LEVEL_ACTUATED_ON = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.liquidLevelActuatedSwitch;aspect=fixed;elSwitchState=on;',
  },
  _original_width: 75,
  _original_height: 30,
}

export function LiquidLevelActuatedOn(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIQUID_LEVEL_ACTUATED_ON}
      {...props}
      _style={extendStyle(LIQUID_LEVEL_ACTUATED_ON, props)}
    />
  )
}
