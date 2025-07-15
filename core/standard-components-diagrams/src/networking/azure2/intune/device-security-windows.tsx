import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEVICE_SECURITY_WINDOWS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Device_Security_Windows.svg;',
  _width: 68,
  _height: 68,
}

export function DeviceSecurityWindows(props: DiagramNodeProps) {
  return <Shape {...DEVICE_SECURITY_WINDOWS} {...props} />
}
