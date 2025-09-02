import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TENANT_PROPERTIES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Tenant_Properties.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 48,
}

export function TenantProperties(props: DiagramNodeProps) {
  return (
    <Shape
      {...TENANT_PROPERTIES}
      {...props}
      _style={extendStyle(TENANT_PROPERTIES, props)}
    />
  )
}
