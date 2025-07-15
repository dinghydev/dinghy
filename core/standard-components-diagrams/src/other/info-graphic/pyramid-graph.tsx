import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PYRAMID_GRAPH = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedPyramid;fillColor=#23445D;strokeColor=none;fontSize=10;labelPosition=center;align=center;shadow=0;',
  _width: 0,
  _height: 140,
}

export function PyramidGraph(props: DiagramNodeProps) {
  return <Shape {...PYRAMID_GRAPH} {...props} />
}
