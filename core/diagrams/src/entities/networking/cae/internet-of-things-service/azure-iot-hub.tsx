import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AZURE_IOT_HUB = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_IoT_Hub.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
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
