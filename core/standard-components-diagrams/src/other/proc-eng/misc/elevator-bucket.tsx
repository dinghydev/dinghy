import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELEVATOR_BUCKET = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.elevator_(bucket);',
  },
  _width: 160,
  _height: 250,
}

export function ElevatorBucket(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELEVATOR_BUCKET}
      {...props}
      _style={extendStyle(ELEVATOR_BUCKET, props)}
    />
  )
}
