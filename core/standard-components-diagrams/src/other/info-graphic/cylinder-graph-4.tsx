import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CYLINDER_GRAPH_4 = {
  _style:
    'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=mxgraph.infographic.cylinder;fillColor=#F2931E;strokeColor=none;shadow=0;align=left;labelPosition=right;spacingLeft=10;fontStyle=1;fontColor=#F2931E;',
  _width: 3,
  _height: 460,
}

export function CylinderGraph4(props: DiagramNodeProps) {
  return (
    <Shape
      {...CYLINDER_GRAPH_4}
      {...props}
      _style={extendStyle(CYLINDER_GRAPH_4, props)}
    />
  )
}
