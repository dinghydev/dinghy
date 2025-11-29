import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CYLINDER_GRAPH_5 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=mxgraph.infographic.cylinder;fillColor=#10739E;strokeColor=none;shadow=0;align=left;labelPosition=right;spacingLeft=10;fontStyle=1;fontColor=#10739E;',
  },
  _width: 4,
  _height: 460,
}

export function CylinderGraph5(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CYLINDER_GRAPH_5)} />
}
