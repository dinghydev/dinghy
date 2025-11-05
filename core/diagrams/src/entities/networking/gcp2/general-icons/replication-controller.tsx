import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REPLICATION_CONTROLLER = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.replication_controller',
  },
  _original_width: 100,
  _original_height: 91,
}

export function ReplicationController(props: NodeProps) {
  return (
    <Shape
      {...REPLICATION_CONTROLLER}
      {...props}
      _style={extendStyle(REPLICATION_CONTROLLER, props)}
    />
  )
}
