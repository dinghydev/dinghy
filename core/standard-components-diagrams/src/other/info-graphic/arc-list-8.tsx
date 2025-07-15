import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARC_LIST_8 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.arc;fillColor=none;strokeColor=#10739E;startAngle=0.75;endAngle=0.08;strokeWidth=16;',
  _width: 5,
  _height: 200,
}

export function ArcList8(props: DiagramNodeProps) {
  return <Shape {...ARC_LIST_8} {...props} />
}
