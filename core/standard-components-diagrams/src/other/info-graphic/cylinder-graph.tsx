import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CYLINDER_GRAPH = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=mxgraph.infographic.cylinder;fillColor=#12AAB5;strokeColor=none;shadow=0;align=left;labelPosition=right;spacingLeft=10;fontStyle=1;fontColor=#12AAB5;',
  },
  _original_width: 0,
  _original_height: 460,
}

export function CylinderGraph(props: DiagramNodeProps) {
  return (
    <Shape
      {...CYLINDER_GRAPH}
      {...props}
      _style={extendStyle(CYLINDER_GRAPH, props)}
    />
  )
}
