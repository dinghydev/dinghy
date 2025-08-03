import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STORSIMPLE_DATA_MANAGERS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/StorSimple_Data_Managers.svg;strokeColor=none;',
  _width: 48,
  _height: 64,
}

export function StorsimpleDataManagers(props: DiagramNodeProps) {
  return <Shape {...STORSIMPLE_DATA_MANAGERS} {...props} />
}
