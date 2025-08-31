import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RETROSPECTIVE_SECURITY = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.retrospective_security;',
  _width: 50,
  _height: 48,
}

export function RetrospectiveSecurity(props: DiagramNodeProps) {
  return (
    <Shape
      {...RETROSPECTIVE_SECURITY}
      {...props}
      _style={extendStyle(RETROSPECTIVE_SECURITY, props)}
    />
  )
}
