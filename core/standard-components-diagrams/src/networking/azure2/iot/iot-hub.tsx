import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IOT_HUB = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/IoT_Hub.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function IotHub(props: DiagramNodeProps) {
  return <Shape {...IOT_HUB} {...props} _style={extendStyle(IOT_HUB, props)} />
}
