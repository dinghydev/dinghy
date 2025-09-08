import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONVEYOR_SCREW_CLOSED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.conveyor_(screw,_closed);',
  },
  _original_width: 220,
  _original_height: 80,
}

export function ConveyorScrewClosed(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONVEYOR_SCREW_CLOSED}
      {...props}
      _style={extendStyle(CONVEYOR_SCREW_CLOSED, props)}
    />
  )
}
