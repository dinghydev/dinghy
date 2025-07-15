import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GENERIC_GATEWAY = {
  _style:
    'shape=mxgraph.cisco.hubs_and_gateways.generic_gateway;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 66,
  _height: 74,
}

export function GenericGateway(props: DiagramNodeProps) {
  return <Shape {...GENERIC_GATEWAY} {...props} />
}
