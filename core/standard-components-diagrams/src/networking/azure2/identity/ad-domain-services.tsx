import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AD_DOMAIN_SERVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Azure_AD_Domain_Services.svg;',
  _width: 70,
  _height: 64,
}

export function AdDomainServices(props: DiagramNodeProps) {
  return <Shape {...AD_DOMAIN_SERVICES} {...props} />
}
