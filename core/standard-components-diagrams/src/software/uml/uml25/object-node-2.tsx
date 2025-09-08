import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OBJECT_NODE_2 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.ribbonSimple;notch1=20;notch2=20;align=center;verticalAlign=middle;fontSize=14;fontStyle=0;fillColor=#FFFFFF;whiteSpace=wrap;',
  },
  _original_width: 160,
  _original_height: 40,
}

export function ObjectNode2(props: DiagramNodeProps) {
  return (
    <Shape
      {...OBJECT_NODE_2}
      {...props}
      _style={extendStyle(OBJECT_NODE_2, props)}
    />
  )
}
