import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOCTOR_MAN_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Doctor_Man_Black_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function DoctorManBlack(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOCTOR_MAN_BLACK}
      {...props}
      _style={extendStyle(DOCTOR_MAN_BLACK, props)}
    />
  )
}
