import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRINT_SERVER = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Print_Server_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function PrintServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRINT_SERVER}
      {...props}
      _style={extendStyle(PRINT_SERVER, props)}
    />
  )
}
