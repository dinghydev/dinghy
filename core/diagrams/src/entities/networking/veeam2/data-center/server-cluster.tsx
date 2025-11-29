import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVER_CLUSTER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.server_cluster;',
  },
  _width: 56.00000000000001,
  _height: 28.000000000000004,
}

export function ServerCluster(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SERVER_CLUSTER)} />
}
