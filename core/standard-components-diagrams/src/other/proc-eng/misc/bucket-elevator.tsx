import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUCKET_ELEVATOR = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.bucket_elevator;',
  _width: 65,
  _height: 200,
}

export function BucketElevator(props: DiagramNodeProps) {
  return <Shape {...BUCKET_ELEVATOR} {...props} />
}
