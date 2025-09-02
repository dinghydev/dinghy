import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BASEBALL = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.baseball;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 58,
  _original_height: 99,
}

export function Baseball(props: DiagramNodeProps) {
  return (
    <Shape {...BASEBALL} {...props} _style={extendStyle(BASEBALL, props)} />
  )
}
