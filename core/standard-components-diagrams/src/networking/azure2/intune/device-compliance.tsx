import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEVICE_COMPLIANCE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Device_Compliance.svg;strokeColor=none;',
  _width: 62,
  _height: 68,
}

export function DeviceCompliance(props: DiagramNodeProps) {
  return <Shape {...DEVICE_COMPLIANCE} {...props} />
}
