import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NURSE_WOMAN_BLACK = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Nurse_Woman_Black_128x128.png',
  _width: 80,
  _height: 80,
}

export function NurseWomanBlack(props: DiagramNodeProps) {
  return <Shape {...NURSE_WOMAN_BLACK} {...props} />
}
