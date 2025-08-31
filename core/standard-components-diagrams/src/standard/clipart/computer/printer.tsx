import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRINTER = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Printer_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Printer(props: DiagramNodeProps) {
  return <Shape {...PRINTER} {...props} _style={extendStyle(PRINTER, props)} />
}
