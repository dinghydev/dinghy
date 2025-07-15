import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JAMESPOT = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.jamespot;fillColor=#695D5D;gradientColor=#100E0E',
  _width: 78,
  _height: 78,
}

export function Jamespot(props: DiagramNodeProps) {
  return <Shape {...JAMESPOT} {...props} />
}
