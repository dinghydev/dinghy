import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CYLINDER_GRAPH_9 = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.text.callout;linkText=;textSize=17;textColor=#666666;callDir=SW;callStyle=line;fontSize=17;fontColor=#23445D;align=left;verticalAlign=bottom;strokeColor=#666666;fillColor=#4D9900;flipV=0;fontStyle=1;',
  },
  _width: 8,
  _height: 430,
}

export function CylinderGraph9(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CYLINDER_GRAPH_9)} />
}
