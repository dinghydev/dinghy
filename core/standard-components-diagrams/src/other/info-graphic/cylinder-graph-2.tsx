import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CYLINDER_GRAPH_2 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=mxgraph.infographic.cylinder;fillColor=#23445D;strokeColor=none;shadow=0;align=left;labelPosition=right;spacingLeft=10;fontStyle=1;fontColor=#23445D;',
  },
  _original_width: 1,
  _original_height: 460,
}

export function CylinderGraph2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CYLINDER_GRAPH_2}
      {...props}
      _style={extendStyle(CYLINDER_GRAPH_2, props)}
    />
  )
}
