import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PYRAMID_GRAPH_2 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedPyramid;fillColor=#12AAB5;strokeColor=none;fontSize=10;labelPosition=center;align=center;shadow=0;',
  _width: 1,
  _height: 140,
}

export function PyramidGraph2(props: DiagramNodeProps) {
  return <Shape {...PYRAMID_GRAPH_2} {...props} />
}
