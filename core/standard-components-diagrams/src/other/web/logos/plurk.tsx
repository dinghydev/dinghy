import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PLURK = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.plurk;fillColor=#E9443D;strokeColor=none',
  _width: 102.4,
  _height: 102.4,
}

export function Plurk(props: DiagramNodeProps) {
  return <Shape {...PLURK} {...props} />
}
