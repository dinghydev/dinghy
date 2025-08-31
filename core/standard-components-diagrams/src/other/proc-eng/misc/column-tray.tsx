import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COLUMN_TRAY = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid2misc.column;columnType=tray',
  _width: 50,
  _height: 120,
}

export function ColumnTray(props: DiagramNodeProps) {
  return (
    <Shape
      {...COLUMN_TRAY}
      {...props}
      _style={extendStyle(COLUMN_TRAY, props)}
    />
  )
}
