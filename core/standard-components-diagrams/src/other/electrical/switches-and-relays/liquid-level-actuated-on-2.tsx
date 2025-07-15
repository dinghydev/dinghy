import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LIQUID_LEVEL_ACTUATED_ON_2 = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.liquidLevelActuatedSwitch2;aspect=fixed;elSwitchState=on;',
  _width: 75,
  _height: 32,
}

export function LiquidLevelActuatedOn2(props: DiagramNodeProps) {
  return <Shape {...LIQUID_LEVEL_ACTUATED_ON_2} {...props} />
}
