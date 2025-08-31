import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OFFICE_TABLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.office_chair;shadow=0;',
  },
  _width: 0,
  _height: 70,
}

export function OfficeTable(props: DiagramNodeProps) {
  return (
    <Shape
      {...OFFICE_TABLE}
      {...props}
      _style={extendStyle(OFFICE_TABLE, props)}
    />
  )
}
