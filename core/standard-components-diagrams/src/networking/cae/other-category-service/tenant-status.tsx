import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TENANT_STATUS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Tenant_Status.svg;strokeColor=none;',
  _width: 46,
  _height: 50,
}

export function TenantStatus(props: DiagramNodeProps) {
  return <Shape {...TENANT_STATUS} {...props} />
}
