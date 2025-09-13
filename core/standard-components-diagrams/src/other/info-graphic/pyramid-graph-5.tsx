import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PYRAMID_GRAPH_5 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedPyramid;fillColor=#10739E;strokeColor=none;fontSize=10;labelPosition=center;align=center;shadow=0;',
  },
  _width: 4,
  _height: 140,
}

export function PyramidGraph5(props: DiagramNodeProps) {
  return (
    <Shape
      {...PYRAMID_GRAPH_5}
      {...props}
      _style={extendStyle(PYRAMID_GRAPH_5, props)}
    />
  )
}
