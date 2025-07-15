import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LIQUID_LEVEL_ACTUATED_OFF_2 = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.liquidLevelActuatedSwitch2;aspect=fixed;elSwitchState=off;',
  _width: 75,
  _height: 32,
}

export function LiquidLevelActuatedOff2(props: DiagramNodeProps) {
  return <Shape {...LIQUID_LEVEL_ACTUATED_OFF_2} {...props} />
}
