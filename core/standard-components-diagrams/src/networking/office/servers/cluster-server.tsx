import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLUSTER_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.cluster_server;',
  },
  _width: 49,
  _height: 59,
}

export function ClusterServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLUSTER_SERVER}
      {...props}
      _style={extendStyle(CLUSTER_SERVER, props)}
    />
  )
}
