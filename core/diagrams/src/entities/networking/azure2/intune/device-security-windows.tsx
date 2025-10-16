import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DEVICE_SECURITY_WINDOWS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Device_Security_Windows.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function DeviceSecurityWindows(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEVICE_SECURITY_WINDOWS}
      {...props}
      _style={extendStyle(DEVICE_SECURITY_WINDOWS, props)}
    />
  )
}
