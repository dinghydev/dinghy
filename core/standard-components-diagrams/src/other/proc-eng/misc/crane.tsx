import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CRANE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.crane;',
  },
  _width: 60,
  _height: 60,
}

export function Crane(props: DiagramNodeProps) {
  return <Shape {...CRANE} {...props} _style={extendStyle(CRANE, props)} />
}
