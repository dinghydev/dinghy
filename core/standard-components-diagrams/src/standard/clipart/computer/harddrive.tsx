import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HARDDRIVE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Harddrive_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Harddrive(props: DiagramNodeProps) {
  return (
    <Shape {...HARDDRIVE} {...props} _style={extendStyle(HARDDRIVE, props)} />
  )
}
