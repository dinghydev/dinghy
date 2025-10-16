import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DEVICE_CONFIGURATION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Device_Configuration.svg;strokeColor=none;',
  },
  _original_width: 62,
  _original_height: 68,
}

export function DeviceConfiguration(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEVICE_CONFIGURATION}
      {...props}
      _style={extendStyle(DEVICE_CONFIGURATION, props)}
    />
  )
}
