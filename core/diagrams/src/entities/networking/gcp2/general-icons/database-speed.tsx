import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_SPEED = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.database_speed',
  },
  _width: 69,
  _height: 100,
}

export function DatabaseSpeed(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATABASE_SPEED)} />
}
