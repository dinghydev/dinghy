import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONVEYOR_SCREW_CLOSED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.conveyor_(screw,_closed);',
  },
  _width: 220,
  _height: 80,
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
