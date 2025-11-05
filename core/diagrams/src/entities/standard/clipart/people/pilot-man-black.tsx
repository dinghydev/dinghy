import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PILOT_MAN_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Pilot_Man_Black_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function PilotManBlack(props: NodeProps) {
  return (
    <Shape
      {...PILOT_MAN_BLACK}
      {...props}
      _style={extendStyle(PILOT_MAN_BLACK, props)}
    />
  )
}
