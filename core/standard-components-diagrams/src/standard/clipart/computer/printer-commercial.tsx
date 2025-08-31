import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRINTER_COMMERCIAL = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Printer_Commercial_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function PrinterCommercial(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRINTER_COMMERCIAL}
      {...props}
      _style={extendStyle(PRINTER_COMMERCIAL, props)}
    />
  )
}
