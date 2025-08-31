import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REPLICATION_CONTROLLER_3 = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.replication_controller_3',
  },
  _width: 100,
  _height: 66,
}

export function ReplicationController3(props: DiagramNodeProps) {
  return (
    <Shape
      {...REPLICATION_CONTROLLER_3}
      {...props}
      _style={extendStyle(REPLICATION_CONTROLLER_3, props)}
    />
  )
}
