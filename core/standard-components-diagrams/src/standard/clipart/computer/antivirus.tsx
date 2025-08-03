import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ANTIVIRUS = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Antivirus_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function Antivirus(props: DiagramNodeProps) {
  return <Shape {...ANTIVIRUS} {...props} />
}
