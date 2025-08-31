import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOCTOR_WOMAN = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Doctor_Woman_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
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
