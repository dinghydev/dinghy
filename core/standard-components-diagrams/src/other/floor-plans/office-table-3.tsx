import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OFFICE_TABLE_3 = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.office_chair;shadow=0;direction=west;',
  _width: 1,
  _height: 140,
}

export function OfficeTable3(props: DiagramNodeProps) {
  return <Shape {...OFFICE_TABLE_3} {...props} />
}
