import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_IOT_HUB = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_IoT_Hub.svg;',
  _width: 50,
  _height: 50,
}

export function AzureIotHub(props: DiagramNodeProps) {
  return <Shape {...AZURE_IOT_HUB} {...props} />
}
