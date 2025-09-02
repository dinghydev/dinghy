import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIFT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.lift;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Lift(props: DiagramNodeProps) {
  return <Shape {...LIFT} {...props} _style={extendStyle(LIFT, props)} />
}
