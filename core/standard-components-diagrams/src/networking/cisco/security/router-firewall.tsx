import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROUTER_FIREWALL = {
  _style: {
    entity:
      'shape=mxgraph.cisco.security.router_firewall;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 78,
  _original_height: 62,
}

export function RouterFirewall(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROUTER_FIREWALL}
      {...props}
      _style={extendStyle(ROUTER_FIREWALL, props)}
    />
  )
}
