import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIFT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.lift;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Lift(props: NodeProps) {
  return <Shape {...LIFT} {...props} _style={extendStyle(LIFT, props)} />
}
