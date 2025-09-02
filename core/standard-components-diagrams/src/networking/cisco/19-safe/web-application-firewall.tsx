import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEB_APPLICATION_FIREWALL = {
  _style: {
    entity:
      'sketch=0;points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=web_application_firewall;fillColor=#FAFAFA;strokeColor=#005073;',
  },
  _original_width: 64,
  _original_height: 50,
}

export function WebApplicationFirewall(props: DiagramNodeProps) {
  return (
    <Shape
      {...WEB_APPLICATION_FIREWALL}
      {...props}
      _style={extendStyle(WEB_APPLICATION_FIREWALL, props)}
    />
  )
}
