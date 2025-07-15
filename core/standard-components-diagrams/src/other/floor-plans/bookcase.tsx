import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BOOKCASE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.bookcase;',
  _width: 120,
  _height: 30,
}

export function Bookcase(props: DiagramNodeProps) {
  return <Shape {...BOOKCASE} {...props} />
}
