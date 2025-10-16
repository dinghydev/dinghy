import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DEVICE_PROVISIONING_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Device_Provisioning_Services.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 66,
}

export function DeviceProvisioningServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEVICE_PROVISIONING_SERVICES}
      {...props}
      _style={extendStyle(DEVICE_PROVISIONING_SERVICES, props)}
    />
  )
}
