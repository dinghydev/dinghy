import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STORSIMPLE_DATA_MANAGERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/StorSimple_Data_Managers.svg;strokeColor=none;',
  },
  _original_width: 48,
  _original_height: 64,
}

export function StorsimpleDataManagers(props: DiagramNodeProps) {
  return (
    <Shape
      {...STORSIMPLE_DATA_MANAGERS}
      {...props}
      _style={extendStyle(STORSIMPLE_DATA_MANAGERS, props)}
    />
  )
}
