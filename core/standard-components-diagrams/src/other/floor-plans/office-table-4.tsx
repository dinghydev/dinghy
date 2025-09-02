import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OFFICE_TABLE_4 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.office_chair;shadow=0;direction=north;',
  },
  _original_width: 2,
  _original_height: 140,
}

export function OfficeTable4(props: DiagramNodeProps) {
  return (
    <Shape
      {...OFFICE_TABLE_4}
      {...props}
      _style={extendStyle(OFFICE_TABLE_4, props)}
    />
  )
}
