import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_2 = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.database_2',
  },
  _width: 78,
  _height: 100,
}

export function Database2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATABASE_2)} />
}
