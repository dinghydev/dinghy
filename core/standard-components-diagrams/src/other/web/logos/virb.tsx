import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRB = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.virb;fillColor=#000000;strokeColor=none',
  _width: 66,
  _height: 70.60000000000001,
}

export function Virb(props: DiagramNodeProps) {
  return <Shape {...VIRB} {...props} />
}
