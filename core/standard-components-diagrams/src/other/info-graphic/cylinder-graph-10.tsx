import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CYLINDER_GRAPH_10 = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.text.callout;linkText=;textSize=17;textColor=#666666;callDir=SW;callStyle=line;fontSize=17;fontColor=#12AAB5;align=left;verticalAlign=bottom;strokeColor=#666666;fillColor=#4D9900;flipV=0;fontStyle=1;',
  },
  _original_width: 9,
  _original_height: 430,
}

export function CylinderGraph10(props: DiagramNodeProps) {
  return (
    <Shape
      {...CYLINDER_GRAPH_10}
      {...props}
      _style={extendStyle(CYLINDER_GRAPH_10, props)}
    />
  )
}
