import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEVICE_PROVISIONING_SERVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Device_Provisioning_Services.svg;strokeColor=none;',
  _width: 64,
  _height: 66,
}

export function DeviceProvisioningServices(props: DiagramNodeProps) {
  return <Shape {...DEVICE_PROVISIONING_SERVICES} {...props} />
}
