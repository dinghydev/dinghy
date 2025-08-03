import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_IOT_HUB_SECURITY = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_IoT_Hub_Security.svg;strokeColor=none;',
  _width: 37,
  _height: 50,
}

export function AzureIotHubSecurity(props: DiagramNodeProps) {
  return <Shape {...AZURE_IOT_HUB_SECURITY} {...props} />
}
