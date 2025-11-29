import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CYLINDER_GRAPH_4 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=mxgraph.infographic.cylinder;fillColor=#F2931E;strokeColor=none;shadow=0;align=left;labelPosition=right;spacingLeft=10;fontStyle=1;fontColor=#F2931E;',
  },
  _width: 3,
  _height: 460,
}

export function CylinderGraph4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CYLINDER_GRAPH_4)} />
}
