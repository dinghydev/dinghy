import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CYLINDER_GRAPH_9 = {
  _style:
    'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.text.callout;linkText=;textSize=17;textColor=#666666;callDir=SW;callStyle=line;fontSize=17;fontColor=#23445D;align=left;verticalAlign=bottom;strokeColor=#666666;fillColor=#4D9900;flipV=0;fontStyle=1;',
  _width: 8,
  _height: 430,
}

export function CylinderGraph9(props: DiagramNodeProps) {
  return <Shape {...CYLINDER_GRAPH_9} {...props} />
}
