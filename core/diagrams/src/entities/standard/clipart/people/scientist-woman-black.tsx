import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCIENTIST_WOMAN_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Scientist_Woman_Black_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function ScientistWomanBlack(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SCIENTIST_WOMAN_BLACK)} />
}
