import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PILOT_WOMAN_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Pilot_Woman_Black_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function PilotWomanBlack(props: DiagramNodeProps) {
  return (
    <Shape
      {...PILOT_WOMAN_BLACK}
      {...props}
      _style={extendStyle(PILOT_WOMAN_BLACK, props)}
    />
  )
}
