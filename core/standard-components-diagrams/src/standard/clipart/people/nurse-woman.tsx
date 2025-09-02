import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NURSE_WOMAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Nurse_Woman_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function NurseWoman(props: DiagramNodeProps) {
  return (
    <Shape
      {...NURSE_WOMAN}
      {...props}
      _style={extendStyle(NURSE_WOMAN, props)}
    />
  )
}
