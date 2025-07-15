import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SSC = {
  _style:
    'shape=mxgraph.cisco.misc.ssc;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 91,
  _height: 67,
}

export function Ssc(props: DiagramNodeProps) {
  return <Shape {...SSC} {...props} />
}
