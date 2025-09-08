import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PYRAMID_GRAPH_4 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedPyramid;fillColor=#F2931E;strokeColor=none;fontSize=10;labelPosition=center;align=center;shadow=0;',
  },
  _original_width: 3,
  _original_height: 140,
}

export function PyramidGraph4(props: DiagramNodeProps) {
  return (
    <Shape
      {...PYRAMID_GRAPH_4}
      {...props}
      _style={extendStyle(PYRAMID_GRAPH_4, props)}
    />
  )
}
