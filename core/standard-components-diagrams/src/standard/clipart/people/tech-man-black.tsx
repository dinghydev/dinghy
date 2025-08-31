import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TECH_MAN_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Tech_Man_Black_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function TechManBlack(props: DiagramNodeProps) {
  return (
    <Shape
      {...TECH_MAN_BLACK}
      {...props}
      _style={extendStyle(TECH_MAN_BLACK, props)}
    />
  )
}
