import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CAMPGROUND = {
  _style:
    'shape=mxgraph.signs.sports.campground;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 84,
}

export function Campground(props: DiagramNodeProps) {
  return <Shape {...CAMPGROUND} {...props} />
}
