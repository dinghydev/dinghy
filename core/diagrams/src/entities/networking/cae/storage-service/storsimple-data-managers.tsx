import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STORSIMPLE_DATA_MANAGERS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/StorSimple_Data_Managers.svg;strokeColor=none;',
  },
  _width: 37,
  _height: 50,
}

export function StorsimpleDataManagers(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, STORSIMPLE_DATA_MANAGERS)} />
  )
}
