import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_MINI = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_mini_1;',
  },
  _width: 35,
  _height: 27,
}

export function DatabaseMini(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATABASE_MINI)} />
}
