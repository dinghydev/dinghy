import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEVICE_PROVISIONING_SERVICES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Device_Provisioning_Services.svg;strokeColor=none;',
  _width: 48,
  _height: 50,
}

export function DeviceProvisioningServices(props: DiagramNodeProps) {
  return <Shape {...DEVICE_PROVISIONING_SERVICES} {...props} />
}
