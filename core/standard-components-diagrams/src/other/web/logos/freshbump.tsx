import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FRESHBUMP = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.freshbump;fillColor=#C2D952;strokeColor=none',
  _width: 71.2,
  _height: 76,
}

export function Freshbump(props: DiagramNodeProps) {
  return <Shape {...FRESHBUMP} {...props} />
}
