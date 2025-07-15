import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OPENSEARCH_SERVICE_INDEX = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.opensearch_service_index;',
  _width: 78,
  _height: 78,
}

export function OpensearchServiceIndex(props: DiagramNodeProps) {
  return <Shape {...OPENSEARCH_SERVICE_INDEX} {...props} />
}
