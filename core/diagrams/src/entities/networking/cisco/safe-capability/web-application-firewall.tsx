import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEB_APPLICATION_FIREWALL = {
  _style: {
    entity:
      'fillColor=#28A8E0;verticalLabelPosition=bottom;sketch=0;html=1;strokeColor=#ffffff;verticalAlign=top;align=center;points=[[0.145,0.145,0],[0.5,0,0],[0.855,0.145,0],[1,0.5,0],[0.855,0.855,0],[0.5,1,0],[0.145,0.855,0],[0,0.5,0]];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=ellipse;resIcon=mxgraph.cisco_safe.capability.web_application_firewall;',
  },
  _original_width: 43,
  _original_height: 43,
}

export function WebApplicationFirewall(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, WEB_APPLICATION_FIREWALL)} />
  )
}
