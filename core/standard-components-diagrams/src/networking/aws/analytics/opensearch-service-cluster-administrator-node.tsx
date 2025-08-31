import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPENSEARCH_SERVICE_CLUSTER_ADMINISTRATOR_NODE = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.opensearch_service_cluster_administrator_node;',
  _width: 60,
  _height: 60,
}

export function OpensearchServiceClusterAdministratorNode(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...OPENSEARCH_SERVICE_CLUSTER_ADMINISTRATOR_NODE}
      {...props}
      _style={extendStyle(OPENSEARCH_SERVICE_CLUSTER_ADMINISTRATOR_NODE, props)}
    />
  )
}
