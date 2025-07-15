import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REPLICATION_CONTROLLER = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.replication_controller',
  _width: 100,
  _height: 91,
}

export function ReplicationController(props: DiagramNodeProps) {
  return <Shape {...REPLICATION_CONTROLLER} {...props} />
}
