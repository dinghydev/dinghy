import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PILOT_WOMAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Pilot_Woman_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function PilotWoman(props: DiagramNodeProps) {
  return (
    <Shape
      {...PILOT_WOMAN}
      {...props}
      _style={extendStyle(PILOT_WOMAN, props)}
    />
  )
}
