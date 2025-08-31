import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CYLINDER_GRAPH_3 = {
  _style:
    'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=mxgraph.infographic.cylinder;fillColor=#AE4132;strokeColor=none;shadow=0;align=left;labelPosition=right;spacingLeft=10;fontStyle=1;fontColor=#AE4132;',
  _width: 2,
  _height: 460,
}

export function CylinderGraph3(props: DiagramNodeProps) {
  return (
    <Shape
      {...CYLINDER_GRAPH_3}
      {...props}
      _style={extendStyle(CYLINDER_GRAPH_3, props)}
    />
  )
}
