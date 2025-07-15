import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STORSIMPLE_DATA_MANAGERS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/StorSimple_Data_Managers.svg;',
  _width: 37,
  _height: 50,
}

export function StorsimpleDataManagers(props: DiagramNodeProps) {
  return <Shape {...STORSIMPLE_DATA_MANAGERS} {...props} />
}
