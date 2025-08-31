import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PILOT_MAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Pilot_Man_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function PilotMan(props: DiagramNodeProps) {
  return (
    <Shape {...PILOT_MAN} {...props} _style={extendStyle(PILOT_MAN, props)} />
  )
}
