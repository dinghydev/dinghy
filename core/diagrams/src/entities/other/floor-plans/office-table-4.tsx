import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OFFICE_TABLE_4 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.office_chair;shadow=0;direction=north;',
  },
  _width: 2,
  _height: 140,
}

export function OfficeTable4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OFFICE_TABLE_4)} />
}
