import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENS_EDGE_NODE_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ens_edge_node_service;',
  },
  _original_width: 54.900000000000006,
  _original_height: 54.900000000000006,
}

export function EnsEdgeNodeService(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENS_EDGE_NODE_SERVICE}
      {...props}
      _style={extendStyle(ENS_EDGE_NODE_SERVICE, props)}
    />
  )
}
