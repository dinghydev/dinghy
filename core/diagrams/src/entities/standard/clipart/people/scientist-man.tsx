import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCIENTIST_MAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Scientist_Man_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function ScientistMan(props: NodeProps) {
  return (
    <Shape
      {...SCIENTIST_MAN}
      {...props}
      _style={extendStyle(SCIENTIST_MAN, props)}
    />
  )
}
