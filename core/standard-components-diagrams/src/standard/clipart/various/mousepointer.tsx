import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOUSEPOINTER = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/general/Mouse_Pointer_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Mousepointer(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOUSEPOINTER}
      {...props}
      _style={extendStyle(MOUSEPOINTER, props)}
    />
  )
}
