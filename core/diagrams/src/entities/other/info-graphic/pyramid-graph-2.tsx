import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PYRAMID_GRAPH_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedPyramid;fillColor=#12AAB5;strokeColor=none;fontSize=10;labelPosition=center;align=center;shadow=0;',
  },
  _width: 1,
  _height: 140,
}

export function PyramidGraph2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PYRAMID_GRAPH_2)} />
}
