import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TENANT_PROPERTIES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Tenant_Properties.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 48,
}

export function TenantProperties(props: NodeProps) {
  return (
    <Shape
      {...TENANT_PROPERTIES}
      {...props}
      _style={extendStyle(TENANT_PROPERTIES, props)}
    />
  )
}
