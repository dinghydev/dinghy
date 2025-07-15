import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IOT_HUB = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/IoT_Hub.svg;',
  _width: 64,
  _height: 64,
}

export function IotHub(props: DiagramNodeProps) {
  return <Shape {...IOT_HUB} {...props} />
}
