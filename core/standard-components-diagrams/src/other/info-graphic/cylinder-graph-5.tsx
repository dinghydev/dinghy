import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CYLINDER_GRAPH_5 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=mxgraph.infographic.cylinder;fillColor=#10739E;strokeColor=none;shadow=0;align=left;labelPosition=right;spacingLeft=10;fontStyle=1;fontColor=#10739E;',
  },
  _original_width: 4,
  _original_height: 460,
}

export function CylinderGraph5(props: DiagramNodeProps) {
  return (
    <Shape
      {...CYLINDER_GRAPH_5}
      {...props}
      _style={extendStyle(CYLINDER_GRAPH_5, props)}
    />
  )
}
