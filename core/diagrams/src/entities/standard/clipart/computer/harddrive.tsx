import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HARDDRIVE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Harddrive_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Harddrive(props: NodeProps) {
  return (
    <Shape {...HARDDRIVE} {...props} _style={extendStyle(HARDDRIVE, props)} />
  )
}
