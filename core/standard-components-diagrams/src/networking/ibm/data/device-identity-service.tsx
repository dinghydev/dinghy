import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEVICE_IDENTITY_SERVICE = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/data/device_identity_service.svg;',
  _width: 60,
  _height: 60,
}

export function DeviceIdentityService(props: DiagramNodeProps) {
  return <Shape {...DEVICE_IDENTITY_SERVICE} {...props} />
}
