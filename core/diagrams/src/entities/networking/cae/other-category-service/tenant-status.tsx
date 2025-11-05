import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TENANT_STATUS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Tenant_Status.svg;strokeColor=none;',
  },
  _original_width: 46,
  _original_height: 50,
}

export function TenantStatus(props: NodeProps) {
  return (
    <Shape
      {...TENANT_STATUS}
      {...props}
      _style={extendStyle(TENANT_STATUS, props)}
    />
  )
}
