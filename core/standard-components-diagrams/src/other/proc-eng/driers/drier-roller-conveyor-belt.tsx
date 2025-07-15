import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DRIER_ROLLER_CONVEYOR_BELT = {
  _style:
    'shape=mxgraph.pid.driers.drier_(roller_conveyor_belt);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 140,
}

export function DrierRollerConveyorBelt(props: DiagramNodeProps) {
  return <Shape {...DRIER_ROLLER_CONVEYOR_BELT} {...props} />
}
