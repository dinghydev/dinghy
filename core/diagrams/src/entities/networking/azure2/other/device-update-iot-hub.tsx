import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEVICE_UPDATE_IOT_HUB = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Device_Update_IoT_Hub.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 68,
}

export function DeviceUpdateIotHub(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DEVICE_UPDATE_IOT_HUB)} />
}
