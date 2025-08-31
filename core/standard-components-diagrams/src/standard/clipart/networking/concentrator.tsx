import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONCENTRATOR = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Concentrator_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Concentrator(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONCENTRATOR}
      {...props}
      _style={extendStyle(CONCENTRATOR, props)}
    />
  )
}
