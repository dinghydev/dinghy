import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRINTER_COMMERCIAL = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Printer_Commercial_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function PrinterCommercial(props: NodeProps) {
  return (
    <Shape
      {...PRINTER_COMMERCIAL}
      {...props}
      _style={extendStyle(PRINTER_COMMERCIAL, props)}
    />
  )
}
