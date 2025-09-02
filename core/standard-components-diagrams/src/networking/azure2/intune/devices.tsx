import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Devices.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 60,
}

export function Devices(props: DiagramNodeProps) {
  return <Shape {...DEVICES} {...props} _style={extendStyle(DEVICES, props)} />
}
