import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEVICE_COMPLIANCE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Device_Compliance.svg;strokeColor=none;',
  },
  _original_width: 62,
  _original_height: 68,
}

export function DeviceCompliance(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEVICE_COMPLIANCE}
      {...props}
      _style={extendStyle(DEVICE_COMPLIANCE, props)}
    />
  )
}
