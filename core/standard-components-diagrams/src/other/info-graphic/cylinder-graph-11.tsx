import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CYLINDER_GRAPH_11 = {
  _style:
    'rounded=0;whiteSpace=wrap;shadow=0;strokeColor=none;strokeWidth=6;fillColor=none;fontSize=12;align=right;html=1;',
  _width: 10,
  _height: 430,
}

export function CylinderGraph11(props: DiagramNodeProps) {
  return (
    <Shape
      {...CYLINDER_GRAPH_11}
      {...props}
      _style={extendStyle(CYLINDER_GRAPH_11, props)}
    />
  )
}
