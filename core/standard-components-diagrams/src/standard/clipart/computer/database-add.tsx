import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_ADD = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Database_Add_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function DatabaseAdd(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_ADD}
      {...props}
      _style={extendStyle(DATABASE_ADD, props)}
    />
  )
}
