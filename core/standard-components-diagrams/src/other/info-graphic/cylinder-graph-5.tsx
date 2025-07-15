import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CYLINDER_GRAPH_5 = {
  _style:
    'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=mxgraph.infographic.cylinder;fillColor=#10739E;strokeColor=none;shadow=0;align=left;labelPosition=right;spacingLeft=10;fontStyle=1;fontColor=#10739E;',
  _width: 4,
  _height: 460,
}

export function CylinderGraph5(props: DiagramNodeProps) {
  return <Shape {...CYLINDER_GRAPH_5} {...props} />
}
