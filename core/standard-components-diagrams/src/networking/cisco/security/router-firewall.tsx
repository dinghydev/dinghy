import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROUTER_FIREWALL = {
  _style:
    'shape=mxgraph.cisco.security.router_firewall;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 78,
  _height: 62,
}

export function RouterFirewall(props: DiagramNodeProps) {
  return <Shape {...ROUTER_FIREWALL} {...props} />
}
