import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OPENSEARCH_SERVICE_CLUSTER_ADMINISTRATOR_NODE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.opensearch_service_cluster_administrator_node;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function OpensearchServiceClusterAdministratorNode(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, OPENSEARCH_SERVICE_CLUSTER_ADMINISTRATOR_NODE)}
    />
  )
}
