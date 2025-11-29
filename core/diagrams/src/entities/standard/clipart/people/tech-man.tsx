import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TECH_MAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Tech_Man_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function TechMan(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TECH_MAN)} />
}
