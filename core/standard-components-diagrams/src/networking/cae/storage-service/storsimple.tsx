import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STORSIMPLE = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/StorSimple.svg;strokeColor=none;',
  _width: 50,
  _height: 45,
}

export function Storsimple(props: DiagramNodeProps) {
  return <Shape {...STORSIMPLE} {...props} />
}
