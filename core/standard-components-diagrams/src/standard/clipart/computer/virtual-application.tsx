import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_APPLICATION = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Virtual_Application_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function VirtualApplication(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL_APPLICATION} {...props} />
}
