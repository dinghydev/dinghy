import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BASEBALL = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.baseball;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 58,
  _height: 99,
}

export function Baseball(props: DiagramNodeProps) {
  return (
    <Shape {...BASEBALL} {...props} _style={extendStyle(BASEBALL, props)} />
  )
}
