import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MILITARY_OFFICER_WOMAN_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Military_Officer_Woman_Black_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function MilitaryOfficerWomanBlack(props: DiagramNodeProps) {
  return (
    <Shape
      {...MILITARY_OFFICER_WOMAN_BLACK}
      {...props}
      _style={extendStyle(MILITARY_OFFICER_WOMAN_BLACK, props)}
    />
  )
}
