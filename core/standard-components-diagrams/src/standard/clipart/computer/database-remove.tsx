import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_REMOVE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Database_Remove_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function DatabaseRemove(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_REMOVE}
      {...props}
      _style={extendStyle(DATABASE_REMOVE, props)}
    />
  )
}
