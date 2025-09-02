import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SIGNALTOWER_ON = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/telecommunication/Signal_tower_on_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function SignaltowerOn(props: DiagramNodeProps) {
  return (
    <Shape
      {...SIGNALTOWER_ON}
      {...props}
      _style={extendStyle(SIGNALTOWER_ON, props)}
    />
  )
}
