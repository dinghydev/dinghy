import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OFFICE_TABLE_5 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.office_chair;shadow=0;direction=south',
  },
  _original_width: 3,
  _original_height: 140,
}

export function OfficeTable5(props: DiagramNodeProps) {
  return (
    <Shape
      {...OFFICE_TABLE_5}
      {...props}
      _style={extendStyle(OFFICE_TABLE_5, props)}
    />
  )
}
