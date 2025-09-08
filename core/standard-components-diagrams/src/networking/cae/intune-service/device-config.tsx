import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DEVICE_CONFIG = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Device_Config.svg;strokeColor=none;',
  },
  _original_width: 44,
  _original_height: 50,
}

export function DeviceConfig(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEVICE_CONFIG}
      {...props}
      _style={extendStyle(DEVICE_CONFIG, props)}
    />
  )
}
