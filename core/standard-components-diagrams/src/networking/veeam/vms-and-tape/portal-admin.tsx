import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PORTAL_ADMIN = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.portal_admin;',
  _width: 44.4,
  _height: 48.8,
}

export function PortalAdmin(props: DiagramNodeProps) {
  return (
    <Shape
      {...PORTAL_ADMIN}
      {...props}
      _style={extendStyle(PORTAL_ADMIN, props)}
    />
  )
}
