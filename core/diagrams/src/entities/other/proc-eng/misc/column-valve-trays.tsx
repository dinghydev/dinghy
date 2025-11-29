import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COLUMN_VALVE_TRAYS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid2misc.column;columnType=valve',
  },
  _width: 50,
  _height: 120,
}

export function ColumnValveTrays(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COLUMN_VALVE_TRAYS)} />
}
