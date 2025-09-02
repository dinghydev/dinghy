import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IOT_HUB = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/IoT_Hub.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
}

export function IotHub(props: DiagramNodeProps) {
  return <Shape {...IOT_HUB} {...props} _style={extendStyle(IOT_HUB, props)} />
}
