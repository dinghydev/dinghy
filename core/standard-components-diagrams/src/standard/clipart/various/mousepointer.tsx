import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOUSEPOINTER = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/general/Mouse_Pointer_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
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
