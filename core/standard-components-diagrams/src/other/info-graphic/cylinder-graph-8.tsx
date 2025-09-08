import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CYLINDER_GRAPH_8 = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.text.callout;linkText=;textSize=17;textColor=#666666;callDir=NW;callStyle=line;fontSize=17;fontColor=#AE4132;align=left;verticalAlign=top;strokeColor=#666666;fillColor=#4D9900;flipV=0;fontStyle=1;',
  },
  _original_width: 7,
  _original_height: 430,
}

export function CylinderGraph8(props: DiagramNodeProps) {
  return (
    <Shape
      {...CYLINDER_GRAPH_8}
      {...props}
      _style={extendStyle(CYLINDER_GRAPH_8, props)}
    />
  )
}
