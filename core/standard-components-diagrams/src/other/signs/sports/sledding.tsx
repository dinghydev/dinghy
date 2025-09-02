import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SLEDDING = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.sledding;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 86,
}

export function Sledding(props: DiagramNodeProps) {
  return (
    <Shape {...SLEDDING} {...props} _style={extendStyle(SLEDDING, props)} />
  )
}
