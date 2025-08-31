import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STORSIMPLE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/StorSimple.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 45,
}

export function Storsimple(props: DiagramNodeProps) {
  return (
    <Shape {...STORSIMPLE} {...props} _style={extendStyle(STORSIMPLE, props)} />
  )
}
