import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PYRAMID_GRAPH_3 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedPyramid;fillColor=#AE4132;strokeColor=none;fontSize=10;labelPosition=center;align=center;shadow=0;',
  },
  _width: 2,
  _height: 140,
}

export function PyramidGraph3(props: NodeProps) {
  return (
    <Shape
      {...PYRAMID_GRAPH_3}
      {...props}
      _style={extendStyle(PYRAMID_GRAPH_3, props)}
    />
  )
}
