import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CYLINDER_GRAPH = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=mxgraph.infographic.cylinder;fillColor=#12AAB5;strokeColor=none;shadow=0;align=left;labelPosition=right;spacingLeft=10;fontStyle=1;fontColor=#12AAB5;',
  },
  _width: 0,
  _height: 460,
}

export function CylinderGraph(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CYLINDER_GRAPH)} />
}
