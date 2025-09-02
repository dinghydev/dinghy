import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SIGNALTOWER_OFF = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/telecommunication/Signal_tower_off_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function SignaltowerOff(props: DiagramNodeProps) {
  return (
    <Shape
      {...SIGNALTOWER_OFF}
      {...props}
      _style={extendStyle(SIGNALTOWER_OFF, props)}
    />
  )
}
