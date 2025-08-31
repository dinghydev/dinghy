import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PYRAMID_GRAPH_4 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedPyramid;fillColor=#F2931E;strokeColor=none;fontSize=10;labelPosition=center;align=center;shadow=0;',
  _width: 3,
  _height: 140,
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
