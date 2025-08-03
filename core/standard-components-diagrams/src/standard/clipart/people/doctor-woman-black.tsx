import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOCTOR_WOMAN_BLACK = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Doctor_Woman_Black_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function DoctorWomanBlack(props: DiagramNodeProps) {
  return <Shape {...DOCTOR_WOMAN_BLACK} {...props} />
}
