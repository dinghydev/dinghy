import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETWORKEDBLOGS = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.networkedblogs',
  _width: 78.80000000000001,
  _height: 78.80000000000001,
}

export function Networkedblogs(props: DiagramNodeProps) {
  return <Shape {...NETWORKEDBLOGS} {...props} />
}
