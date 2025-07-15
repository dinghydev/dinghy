import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRB = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.virb;fillColor=#536873;gradientColor=#161A1D',
  _width: 102.4,
  _height: 102.4,
}

export function Virb(props: DiagramNodeProps) {
  return <Shape {...VIRB} {...props} />
}
