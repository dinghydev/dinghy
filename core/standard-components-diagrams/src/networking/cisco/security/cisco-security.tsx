import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_SECURITY = {
  _style: {
    entity:
      'shape=mxgraph.cisco.security.cisco_security;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 78,
  _height: 70,
}

export function CiscoSecurity(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_SECURITY}
      {...props}
      _style={extendStyle(CISCO_SECURITY, props)}
    />
  )
}
