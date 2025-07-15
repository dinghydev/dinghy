import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const UNIVERSAL_GATEWAY = {
  _style:
    'shape=mxgraph.cisco.hubs_and_gateways.universal_gateway;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 54,
  _height: 56,
}

export function UniversalGateway(props: DiagramNodeProps) {
  return <Shape {...UNIVERSAL_GATEWAY} {...props} />
}
