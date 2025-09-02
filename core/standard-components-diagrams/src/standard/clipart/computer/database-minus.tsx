import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_MINUS = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Database_Minus_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function DatabaseMinus(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_MINUS}
      {...props}
      _style={extendStyle(DATABASE_MINUS, props)}
    />
  )
}
