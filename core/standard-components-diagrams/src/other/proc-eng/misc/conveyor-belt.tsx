import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONVEYOR_BELT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.conveyor_(belt);',
  },
  _original_width: 200,
  _original_height: 50,
}

export function ConveyorBelt(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONVEYOR_BELT}
      {...props}
      _style={extendStyle(CONVEYOR_BELT, props)}
    />
  )
}
