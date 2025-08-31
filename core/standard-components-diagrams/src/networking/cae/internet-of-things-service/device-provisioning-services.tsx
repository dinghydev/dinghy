import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEVICE_PROVISIONING_SERVICES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Device_Provisioning_Services.svg;strokeColor=none;',
  },
  _width: 48,
  _height: 50,
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
