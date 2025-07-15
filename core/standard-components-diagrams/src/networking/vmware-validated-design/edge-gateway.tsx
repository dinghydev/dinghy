import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EDGE_GATEWAY = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.edge_gateway;',
  _width: 50,
  _height: 42.5,
}

export function EdgeGateway(props: DiagramNodeProps) {
  return <Shape {...EDGE_GATEWAY} {...props} />
}
