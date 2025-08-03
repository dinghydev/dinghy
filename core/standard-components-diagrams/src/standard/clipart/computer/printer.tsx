import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRINTER = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Printer_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function Printer(props: DiagramNodeProps) {
  return <Shape {...PRINTER} {...props} />
}
