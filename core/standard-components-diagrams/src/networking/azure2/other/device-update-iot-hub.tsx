import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEVICE_UPDATE_IOT_HUB = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Device_Update_IoT_Hub.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 68,
}

export function DeviceUpdateIotHub(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEVICE_UPDATE_IOT_HUB}
      {...props}
      _style={extendStyle(DEVICE_UPDATE_IOT_HUB, props)}
    />
  )
}
