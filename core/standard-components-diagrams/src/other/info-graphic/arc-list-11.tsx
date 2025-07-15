import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARC_LIST_11 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.arc;fillColor=none;strokeColor=#12AAB5;startAngle=0.02;endAngle=0.25;strokeWidth=16;',
  _width: 8,
  _height: 200,
}

export function ArcList11(props: DiagramNodeProps) {
  return <Shape {...ARC_LIST_11} {...props} />
}
