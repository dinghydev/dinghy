import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TENANT_PROPERTIES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Tenant_Properties.svg;strokeColor=none;',
  _width: 68,
  _height: 48,
}

export function TenantProperties(props: DiagramNodeProps) {
  return <Shape {...TENANT_PROPERTIES} {...props} />
}
