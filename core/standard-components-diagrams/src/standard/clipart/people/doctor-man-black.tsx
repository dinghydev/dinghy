import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOCTOR_MAN_BLACK = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Doctor_Man_Black_128x128.png',
  _width: 80,
  _height: 80,
}

export function DoctorManBlack(props: DiagramNodeProps) {
  return <Shape {...DOCTOR_MAN_BLACK} {...props} />
}
