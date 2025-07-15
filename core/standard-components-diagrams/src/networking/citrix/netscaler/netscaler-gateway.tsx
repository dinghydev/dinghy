import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETSCALER_GATEWAY = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.netscaler_gateway2;',
  _width: 50,
  _height: 42.215,
}

export function NetscalerGateway(props: DiagramNodeProps) {
  return <Shape {...NETSCALER_GATEWAY} {...props} />
}
