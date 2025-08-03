import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_AD_DOMAIN_SERVICES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_AD_Domain_Services.svg;strokeColor=none;',
  _width: 50,
  _height: 50,
}

export function AzureAdDomainServices(props: DiagramNodeProps) {
  return <Shape {...AZURE_AD_DOMAIN_SERVICES} {...props} />
}
