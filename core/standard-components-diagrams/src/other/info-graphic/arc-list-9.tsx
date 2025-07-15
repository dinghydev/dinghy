import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARC_LIST_9 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.arc;fillColor=none;strokeColor=#F2931E;startAngle=0.91;endAngle=0.17;strokeWidth=16;',
  _width: 6,
  _height: 200,
}

export function ArcList9(props: DiagramNodeProps) {
  return <Shape {...ARC_LIST_9} {...props} />
}
