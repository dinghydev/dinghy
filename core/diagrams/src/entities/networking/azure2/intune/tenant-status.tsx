import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TENANT_STATUS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Tenant_Status.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 68,
}

export function TenantStatus(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TENANT_STATUS)} />
}
