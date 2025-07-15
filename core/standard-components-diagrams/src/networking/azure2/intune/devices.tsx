import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Devices.svg;',
  _width: 68,
  _height: 60,
}

export function Devices(props: DiagramNodeProps) {
  return <Shape {...DEVICES} {...props} />
}
