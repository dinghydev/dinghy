import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TENANT_ADMIN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.tenant_admin;',
  },
  _original_width: 56,
  _original_height: 58,
}

export function TenantAdmin(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TENANT_ADMIN)} />
}
