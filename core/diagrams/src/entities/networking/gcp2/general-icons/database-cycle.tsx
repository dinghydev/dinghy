import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_CYCLE = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.database_cycle',
  },
  _original_width: 100,
  _original_height: 98,
}

export function DatabaseCycle(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATABASE_CYCLE)} />
}
