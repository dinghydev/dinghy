import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ETHERNET = {
  _style:
    'shape=mxgraph.signs.tech.ethernet;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 48,
}

export function Ethernet(props: DiagramNodeProps) {
  return <Shape {...ETHERNET} {...props} />
}
