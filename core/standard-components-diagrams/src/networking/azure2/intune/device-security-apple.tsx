import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEVICE_SECURITY_APPLE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Device_Security_Apple.svg;strokeColor=none;',
  _width: 68,
  _height: 69,
}

export function DeviceSecurityApple(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEVICE_SECURITY_APPLE}
      {...props}
      _style={extendStyle(DEVICE_SECURITY_APPLE, props)}
    />
  )
}
