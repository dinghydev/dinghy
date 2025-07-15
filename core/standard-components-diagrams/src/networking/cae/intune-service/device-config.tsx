import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEVICE_CONFIG = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Device_Config.svg;',
  _width: 44,
  _height: 50,
}

export function DeviceConfig(props: DiagramNodeProps) {
  return <Shape {...DEVICE_CONFIG} {...props} />
}
