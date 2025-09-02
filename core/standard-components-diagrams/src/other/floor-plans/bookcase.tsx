import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BOOKCASE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.bookcase;',
  },
  _original_width: 120,
  _original_height: 30,
}

export function Bookcase(props: DiagramNodeProps) {
  return (
    <Shape {...BOOKCASE} {...props} _style={extendStyle(BOOKCASE, props)} />
  )
}
