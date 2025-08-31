import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MILITARY_OFFICER = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Military_Officer_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
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
