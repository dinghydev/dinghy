import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_REMOVE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Database_Remove_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
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
