import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BASEBALL = {
  _style:
    'shape=mxgraph.signs.sports.baseball;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 58,
  _height: 99,
}

export function Baseball(props: DiagramNodeProps) {
  return <Shape {...BASEBALL} {...props} />
}
