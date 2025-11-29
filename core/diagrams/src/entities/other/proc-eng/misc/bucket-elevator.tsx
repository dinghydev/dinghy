import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUCKET_ELEVATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.bucket_elevator;',
  },
  _width: 65,
  _height: 200,
}

export function BucketElevator(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUCKET_ELEVATOR)} />
}
