import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEVICE_IDENTITY_SERVICE = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/data/device_identity_service.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function DeviceIdentityService(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEVICE_IDENTITY_SERVICE}
      {...props}
      _style={extendStyle(DEVICE_IDENTITY_SERVICE, props)}
    />
  )
}
