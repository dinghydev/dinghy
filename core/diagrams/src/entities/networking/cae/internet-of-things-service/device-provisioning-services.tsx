import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEVICE_PROVISIONING_SERVICES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Device_Provisioning_Services.svg;strokeColor=none;',
  },
  _original_width: 48,
  _original_height: 50,
}

export function DeviceProvisioningServices(props: NodeProps) {
  return (
    <Shape
      {...DEVICE_PROVISIONING_SERVICES}
      {...props}
      _style={extendStyle(DEVICE_PROVISIONING_SERVICES, props)}
    />
  )
}
