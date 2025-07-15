import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROTOPAGE = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.protopage;fillColor=#4B78C0;gradientColor=#294282',
  _width: 78.80000000000001,
  _height: 80,
}

export function Protopage(props: DiagramNodeProps) {
  return <Shape {...PROTOPAGE} {...props} />
}
