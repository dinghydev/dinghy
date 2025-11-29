import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEVICE_SECURITY_APPLE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Device_Security_Apple.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 69,
}

export function DeviceSecurityApple(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DEVICE_SECURITY_APPLE)} />
}
