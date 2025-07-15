import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LIQUID_LEVEL_ACTUATED_OFF = {
  _style:
    'html=1;shape=mxgraph.electrical.electro-mechanical.liquidLevelActuatedSwitch;aspect=fixed;elSwitchState=off;',
  _width: 75,
  _height: 30,
}

export function LiquidLevelActuatedOff(props: DiagramNodeProps) {
  return <Shape {...LIQUID_LEVEL_ACTUATED_OFF} {...props} />
}
