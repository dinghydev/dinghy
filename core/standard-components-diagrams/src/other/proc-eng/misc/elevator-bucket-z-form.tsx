import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELEVATOR_BUCKET_Z_FORM = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.elevator_(bucket,_z-form);',
  _width: 430,
  _height: 250,
}

export function ElevatorBucketZForm(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELEVATOR_BUCKET_Z_FORM}
      {...props}
      _style={extendStyle(ELEVATOR_BUCKET_Z_FORM, props)}
    />
  )
}
