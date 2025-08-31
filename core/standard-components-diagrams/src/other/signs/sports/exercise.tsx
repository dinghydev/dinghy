import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXERCISE = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.exercise;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 94,
}

export function Exercise(props: DiagramNodeProps) {
  return (
    <Shape {...EXERCISE} {...props} _style={extendStyle(EXERCISE, props)} />
  )
}
