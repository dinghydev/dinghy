import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE_AD_DOMAIN_SERVICES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_AD_Domain_Services.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function AzureAdDomainServices(props: NodeProps) {
  return (
    <Shape
      {...AZURE_AD_DOMAIN_SERVICES}
      {...props}
      _style={extendStyle(AZURE_AD_DOMAIN_SERVICES, props)}
    />
  )
}
