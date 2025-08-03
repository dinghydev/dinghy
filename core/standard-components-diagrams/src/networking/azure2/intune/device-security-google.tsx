import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEVICE_SECURITY_GOOGLE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Device_Security_Google.svg;strokeColor=none;',
  _width: 68,
  _height: 69,
}

export function DeviceSecurityGoogle(props: DiagramNodeProps) {
  return <Shape {...DEVICE_SECURITY_GOOGLE} {...props} />
}
