import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OFFICE_TABLE_5 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.office_chair;shadow=0;direction=south',
  },
  _width: 3,
  _height: 140,
}

export function OfficeTable5(props: NodeProps) {
  return (
    <Shape
      {...OFFICE_TABLE_5}
      {...props}
      _style={extendStyle(OFFICE_TABLE_5, props)}
    />
  )
}
