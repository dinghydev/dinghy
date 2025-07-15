import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRINTER_COMMERCIAL = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Printer_Commercial_128x128.png',
  _width: 80,
  _height: 80,
}

export function PrinterCommercial(props: DiagramNodeProps) {
  return <Shape {...PRINTER_COMMERCIAL} {...props} />
}
