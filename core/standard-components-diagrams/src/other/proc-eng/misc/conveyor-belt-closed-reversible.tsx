import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONVEYOR_BELT_CLOSED_REVERSIBLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.conveyor_(belt,_closed,_reversible)2;',
  },
  _original_width: 240,
  _original_height: 80,
}

export function ConveyorBeltClosedReversible(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONVEYOR_BELT_CLOSED_REVERSIBLE}
      {...props}
      _style={extendStyle(CONVEYOR_BELT_CLOSED_REVERSIBLE, props)}
    />
  )
}
