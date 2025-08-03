import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEVICE_UPDATE_IOT_HUB = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Device_Update_IoT_Hub.svg;strokeColor=none;',
  _width: 60,
  _height: 68,
}

export function DeviceUpdateIotHub(props: DiagramNodeProps) {
  return <Shape {...DEVICE_UPDATE_IOT_HUB} {...props} />
}
