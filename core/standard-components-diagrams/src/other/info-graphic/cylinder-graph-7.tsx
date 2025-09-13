import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CYLINDER_GRAPH_7 = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.text.callout;linkText=;textSize=17;textColor=#666666;callDir=NW;callStyle=line;fontSize=17;fontColor=#F2931E;align=left;verticalAlign=top;strokeColor=#666666;fillColor=#4D9900;flipV=0;fontStyle=1;',
  },
  _width: 6,
  _height: 430,
}

export function CylinderGraph7(props: DiagramNodeProps) {
  return (
    <Shape
      {...CYLINDER_GRAPH_7}
      {...props}
      _style={extendStyle(CYLINDER_GRAPH_7, props)}
    />
  )
}
