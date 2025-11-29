import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OFFICE_TABLE_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.workstation;shadow=0;flipV=1;',
  },
  _width: 2,
  _height: 70,
}

export function OfficeTable2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OFFICE_TABLE_2)} />
}
