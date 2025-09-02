import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFENDER_PNEUMATIC_DEVICE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Pneumatic_Device.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 55.800000000000004,
}

export function DefenderPneumaticDevice(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEFENDER_PNEUMATIC_DEVICE}
      {...props}
      _style={extendStyle(DEFENDER_PNEUMATIC_DEVICE, props)}
    />
  )
}
