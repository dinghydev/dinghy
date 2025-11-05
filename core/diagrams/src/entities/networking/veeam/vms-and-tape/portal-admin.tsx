import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PORTAL_ADMIN = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.portal_admin;',
  },
  _original_width: 44.4,
  _original_height: 48.8,
}

export function PortalAdmin(props: NodeProps) {
  return (
    <Shape
      {...PORTAL_ADMIN}
      {...props}
      _style={extendStyle(PORTAL_ADMIN, props)}
    />
  )
}
