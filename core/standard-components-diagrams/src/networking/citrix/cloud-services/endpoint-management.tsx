import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ENDPOINT_MANAGEMENT = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.endpoint_management;',
  _width: 50,
  _height: 38.295,
}

export function EndpointManagement(props: DiagramNodeProps) {
  return <Shape {...ENDPOINT_MANAGEMENT} {...props} />
}
