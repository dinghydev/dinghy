import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MILITARY_OFFICER = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Military_Officer_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function MilitaryOfficer(props: DiagramNodeProps) {
  return (
    <Shape
      {...MILITARY_OFFICER}
      {...props}
      _style={extendStyle(MILITARY_OFFICER, props)}
    />
  )
}
