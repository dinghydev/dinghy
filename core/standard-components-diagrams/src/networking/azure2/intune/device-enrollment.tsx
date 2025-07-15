import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEVICE_ENROLLMENT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Device_Enrollment.svg;',
  _width: 68,
  _height: 60.4,
}

export function DeviceEnrollment(props: DiagramNodeProps) {
  return <Shape {...DEVICE_ENROLLMENT} {...props} />
}
