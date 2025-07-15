import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PYRAMID = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedPyramid;fillColor=#10739E;strokeColor=none;',
  _width: 60,
  _height: 100,
}

export function Pyramid(props: DiagramNodeProps) {
  return <Shape {...PYRAMID} {...props} />
}
