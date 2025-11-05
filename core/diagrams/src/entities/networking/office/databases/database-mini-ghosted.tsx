import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_MINI_GHOSTED = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_mini_1;fillColor=#CCCBCB;',
  },
  _width: 35,
  _height: 27,
}

export function DatabaseMiniGhosted(props: NodeProps) {
  return (
    <Shape
      {...DATABASE_MINI_GHOSTED}
      {...props}
      _style={extendStyle(DATABASE_MINI_GHOSTED, props)}
    />
  )
}
