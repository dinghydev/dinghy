import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PYRAMID_GRAPH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedPyramid;fillColor=#23445D;strokeColor=none;fontSize=10;labelPosition=center;align=center;shadow=0;',
  },
  _width: 0,
  _height: 140,
}

export function PyramidGraph(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PYRAMID_GRAPH)} />
}
