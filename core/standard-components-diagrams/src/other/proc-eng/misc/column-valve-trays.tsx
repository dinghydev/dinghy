import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COLUMN_VALVE_TRAYS = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid2misc.column;columnType=valve',
  _width: 50,
  _height: 120,
}

export function ColumnValveTrays(props: DiagramNodeProps) {
  return (
    <Shape
      {...COLUMN_VALVE_TRAYS}
      {...props}
      _style={extendStyle(COLUMN_VALVE_TRAYS, props)}
    />
  )
}
