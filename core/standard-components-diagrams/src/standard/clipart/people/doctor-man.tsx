import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOCTOR_MAN = {
  _style: 'image;html=1;image=img/lib/clip_art/people/Doctor_Man_128x128.png',
  _width: 80,
  _height: 80,
}

export function DoctorMan(props: DiagramNodeProps) {
  return <Shape {...DOCTOR_MAN} {...props} />
}
