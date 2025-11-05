import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PILOT_WOMAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Pilot_Woman_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function PilotWoman(props: NodeProps) {
  return (
    <Shape
      {...PILOT_WOMAN}
      {...props}
      _style={extendStyle(PILOT_WOMAN, props)}
    />
  )
}
