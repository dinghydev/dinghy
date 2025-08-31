import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_IOT_HUB = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_IoT_Hub.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function AzureIotHub(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_IOT_HUB}
      {...props}
      _style={extendStyle(AZURE_IOT_HUB, props)}
    />
  )
}
