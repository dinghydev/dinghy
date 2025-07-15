import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const READERNAUT = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.readernaut;fillColor=#000000;strokeColor=none',
  _width: 72,
  _height: 72,
}

export function Readernaut(props: DiagramNodeProps) {
  return <Shape {...READERNAUT} {...props} />
}
