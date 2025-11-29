import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STORSIMPLE_DATA_MANAGERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/StorSimple_Data_Managers.svg;strokeColor=none;',
  },
  _original_width: 48,
  _original_height: 64,
}

export function StorsimpleDataManagers(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, STORSIMPLE_DATA_MANAGERS)} />
  )
}
