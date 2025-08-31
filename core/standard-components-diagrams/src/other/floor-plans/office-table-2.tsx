import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OFFICE_TABLE_2 = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.workstation;shadow=0;flipV=1;',
  _width: 2,
  _height: 70,
}

export function OfficeTable2(props: DiagramNodeProps) {
  return (
    <Shape
      {...OFFICE_TABLE_2}
      {...props}
      _style={extendStyle(OFFICE_TABLE_2, props)}
    />
  )
}
