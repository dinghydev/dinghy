import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONNOTEA = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.connotea;fillColor=#E9FDFC;gradientColor=#BADBE9',
  _width: 102.4,
  _height: 102.4,
}

export function Connotea(props: DiagramNodeProps) {
  return <Shape {...CONNOTEA} {...props} />
}
