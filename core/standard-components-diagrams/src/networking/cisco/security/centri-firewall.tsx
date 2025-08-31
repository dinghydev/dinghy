import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CENTRI_FIREWALL = {
  _style:
    'shape=mxgraph.cisco.security.centri_firewall;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 43,
  _height: 62,
}

export function CentriFirewall(props: DiagramNodeProps) {
  return (
    <Shape
      {...CENTRI_FIREWALL}
      {...props}
      _style={extendStyle(CENTRI_FIREWALL, props)}
    />
  )
}
