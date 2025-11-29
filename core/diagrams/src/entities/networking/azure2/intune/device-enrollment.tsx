import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEVICE_ENROLLMENT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Device_Enrollment.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 60.4,
}

export function DeviceEnrollment(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DEVICE_ENROLLMENT)} />
}
