import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CYLINDER_GRAPH_6 = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.text.callout;linkText=;textSize=17;textColor=#666666;callDir=NW;callStyle=line;fontSize=17;fontColor=#10739E;align=left;verticalAlign=top;strokeColor=#666666;fillColor=#4D9900;flipV=0;fontStyle=1;',
  },
  _width: 5,
  _height: 430,
}

export function CylinderGraph6(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CYLINDER_GRAPH_6)} />
}
