import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETVIBES = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.netvibes;fillColor=#84BD00;strokeColor=none',
  _width: 61.800000000000004,
  _height: 61.800000000000004,
}

export function Netvibes(props: DiagramNodeProps) {
  return <Shape {...NETVIBES} {...props} />
}
