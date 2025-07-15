import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOUBLE_CONCRETE_TANK = {
  _style:
    'shape=mxgraph.pid.vessels.double_concrete_tank;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 160,
  _height: 75,
}

export function DoubleConcreteTank(props: DiagramNodeProps) {
  return <Shape {...DOUBLE_CONCRETE_TANK} {...props} />
}
