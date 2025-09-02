import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONCENTRATOR = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/Concentrator_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
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
