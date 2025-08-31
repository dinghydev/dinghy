import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAINFRAME = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Mainframe_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Mainframe(props: DiagramNodeProps) {
  return (
    <Shape {...MAINFRAME} {...props} _style={extendStyle(MAINFRAME, props)} />
  )
}
