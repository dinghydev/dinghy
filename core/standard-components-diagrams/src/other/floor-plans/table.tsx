import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TABLE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.table;',
  _width: 90,
  _height: 50,
}

export function Table(props: DiagramNodeProps) {
  return <Shape {...TABLE} {...props} />
}
