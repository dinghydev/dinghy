import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_MINI_GHOSTED_3 = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_mini_3;fillColor=#CCCBCB;',
  },
  _width: 35,
  _height: 57,
}

export function DatabaseMiniGhosted3(props: NodeProps) {
  return (
    <Shape
      {...DATABASE_MINI_GHOSTED_3}
      {...props}
      _style={extendStyle(DATABASE_MINI_GHOSTED_3, props)}
    />
  )
}
