import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXERCISE = {
  _style:
    'shape=mxgraph.signs.sports.exercise;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 94,
}

export function Exercise(props: DiagramNodeProps) {
  return <Shape {...EXERCISE} {...props} />
}
