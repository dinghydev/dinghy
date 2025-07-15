import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICS = {
  _style:
    'shape=mxgraph.cisco.misc.ics;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 70,
  _height: 77,
}

export function Ics(props: DiagramNodeProps) {
  return <Shape {...ICS} {...props} />
}
