import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DEVICE_COMPLIANCE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Device_Compliance.svg;strokeColor=none;',
  },
  _original_width: 41,
  _original_height: 50,
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
