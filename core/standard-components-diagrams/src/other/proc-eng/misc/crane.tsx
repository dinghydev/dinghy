import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CRANE = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.crane;',
  _width: 100,
  _height: 100,
}

export function Crane(props: DiagramNodeProps) {
  return <Shape {...CRANE} {...props} />
}
