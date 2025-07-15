import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GROOVESHARK = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.grooveshark;fillColor=#000000;strokeColor=none',
  _width: 62.2,
  _height: 62.2,
}

export function Grooveshark(props: DiagramNodeProps) {
  return <Shape {...GROOVESHARK} {...props} />
}
