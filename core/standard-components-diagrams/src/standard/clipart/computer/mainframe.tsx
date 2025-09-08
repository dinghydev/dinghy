import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MAINFRAME = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Mainframe_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Mainframe(props: DiagramNodeProps) {
  return (
    <Shape {...MAINFRAME} {...props} _style={extendStyle(MAINFRAME, props)} />
  )
}
