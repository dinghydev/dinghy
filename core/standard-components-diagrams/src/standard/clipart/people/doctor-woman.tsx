import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOCTOR_WOMAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Doctor_Woman_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function DoctorWoman(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOCTOR_WOMAN}
      {...props}
      _style={extendStyle(DOCTOR_WOMAN, props)}
    />
  )
}
