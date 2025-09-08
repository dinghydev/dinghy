import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SQL_DATASYNC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.sql_datasync;',
  },
  _original_width: 37.5,
  _original_height: 50,
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
