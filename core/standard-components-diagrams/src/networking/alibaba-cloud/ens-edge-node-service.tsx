import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ENS_EDGE_NODE_SERVICE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ens_edge_node_service;',
  _width: 54.900000000000006,
  _height: 54.900000000000006,
}

export function EnsEdgeNodeService(props: DiagramNodeProps) {
  return <Shape {...ENS_EDGE_NODE_SERVICE} {...props} />
}
