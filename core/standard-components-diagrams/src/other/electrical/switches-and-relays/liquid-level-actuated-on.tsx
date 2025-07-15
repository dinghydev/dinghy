import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LIQUID_LEVEL_ACTUATED_ON = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.liquidLevelActuatedSwitch;aspect=fixed;elSwitchState=on;',
  _width: 75,
  _height: 30,
}

export function LiquidLevelActuatedOn(props: DiagramNodeProps) {
  return <Shape {...LIQUID_LEVEL_ACTUATED_ON} {...props} />
}
