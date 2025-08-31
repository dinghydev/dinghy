import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NURSE_MAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Nurse_Man_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function NurseMan(props: DiagramNodeProps) {
  return (
    <Shape {...NURSE_MAN} {...props} _style={extendStyle(NURSE_MAN, props)} />
  )
}
