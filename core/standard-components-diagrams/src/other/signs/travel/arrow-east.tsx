import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARROW_EAST = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.arrow_east;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 83,
}

export function ArrowEast(props: DiagramNodeProps) {
  return (
    <Shape {...ARROW_EAST} {...props} _style={extendStyle(ARROW_EAST, props)} />
  )
}
