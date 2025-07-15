import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ENTRA_DOMAIN_SERVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Entra_Domain_Services.svg;',
  _width: 68,
  _height: 68,
}

export function EntraDomainServices(props: DiagramNodeProps) {
  return <Shape {...ENTRA_DOMAIN_SERVICES} {...props} />
}
