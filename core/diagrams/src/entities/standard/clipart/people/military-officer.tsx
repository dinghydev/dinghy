import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MILITARY_OFFICER = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Military_Officer_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function MilitaryOfficer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MILITARY_OFFICER)} />
}
