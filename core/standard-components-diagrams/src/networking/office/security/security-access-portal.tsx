import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SECURITY_ACCESS_PORTAL = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.security_access_portal;',
  },
  _original_width: 64,
  _original_height: 55,
}

export function SecurityAccessPortal(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECURITY_ACCESS_PORTAL}
      {...props}
      _style={extendStyle(SECURITY_ACCESS_PORTAL, props)}
    />
  )
}
