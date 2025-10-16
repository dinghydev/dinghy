import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OFFICE_TABLE_3 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.office_chair;shadow=0;direction=west;',
  },
  _width: 1,
  _height: 140,
}

export function OfficeTable3(props: DiagramNodeProps) {
  return (
    <Shape
      {...OFFICE_TABLE_3}
      {...props}
      _style={extendStyle(OFFICE_TABLE_3, props)}
    />
  )
}
