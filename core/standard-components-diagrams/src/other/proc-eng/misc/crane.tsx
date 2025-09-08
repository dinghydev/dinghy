import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CRANE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.crane;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Crane(props: DiagramNodeProps) {
  return <Shape {...CRANE} {...props} _style={extendStyle(CRANE, props)} />
}
