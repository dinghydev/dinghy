import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CAMPFIRE = {
  _style:
    'shape=mxgraph.signs.sports.campfire;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 92,
  _height: 98,
}

export function Campfire(props: DiagramNodeProps) {
  return <Shape {...CAMPFIRE} {...props} />
}
