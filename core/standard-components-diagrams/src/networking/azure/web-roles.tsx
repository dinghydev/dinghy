import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEB_ROLES = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.web_roles;',
  _width: 55.00000000000001,
  _height: 45,
}

export function WebRoles(props: DiagramNodeProps) {
  return (
    <Shape {...WEB_ROLES} {...props} _style={extendStyle(WEB_ROLES, props)} />
  )
}
