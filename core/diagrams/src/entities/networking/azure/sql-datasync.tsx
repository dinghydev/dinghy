import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SQL_DATASYNC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.sql_datasync;',
  },
  _width: 37.5,
  _height: 50,
}

export function SqlDatasync(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SQL_DATASYNC)} />
}
