import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SQL_DATASYNC = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.sql_datasync;',
  _width: 37.5,
  _height: 50,
}

export function SqlDatasync(props: DiagramNodeProps) {
  return (
    <Shape
      {...SQL_DATASYNC}
      {...props}
      _style={extendStyle(SQL_DATASYNC, props)}
    />
  )
}
