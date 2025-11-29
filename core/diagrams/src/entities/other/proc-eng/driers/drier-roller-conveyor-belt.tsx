import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DRIER_ROLLER_CONVEYOR_BELT = {
  _style: {
    entity:
      'shape=mxgraph.pid.driers.drier_(roller_conveyor_belt);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 140,
}

export function DrierRollerConveyorBelt(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, DRIER_ROLLER_CONVEYOR_BELT)} />
  )
}
