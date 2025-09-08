import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FLAT_DOUBLE_EDGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.flatDoubleEdge2;strokeColor=none;fillColor=#F4B934;aspect=fixed;',
  },
  _original_width: 252.8,
  _original_height: 144,
}

export function FlatDoubleEdge(props: DiagramNodeProps) {
  return (
    <Shape
      {...FLAT_DOUBLE_EDGE}
      {...props}
      _style={extendStyle(FLAT_DOUBLE_EDGE, props)}
    />
  )
}
