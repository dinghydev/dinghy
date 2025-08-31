import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_ADD = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Database_Add_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
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
