import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MILITARY_OFFICER_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Military_Officer_Black_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function MilitaryOfficerBlack(props: DiagramNodeProps) {
  return (
    <Shape
      {...MILITARY_OFFICER_BLACK}
      {...props}
      _style={extendStyle(MILITARY_OFFICER_BLACK, props)}
    />
  )
}
