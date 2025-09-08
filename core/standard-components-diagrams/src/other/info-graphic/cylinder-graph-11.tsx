import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CYLINDER_GRAPH_11 = {
  _style: {
    entity:
      'rounded=0;whiteSpace=wrap;shadow=0;strokeColor=none;strokeWidth=6;fillColor=none;fontSize=12;align=right;html=1;',
  },
  _original_width: 10,
  _original_height: 430,
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
