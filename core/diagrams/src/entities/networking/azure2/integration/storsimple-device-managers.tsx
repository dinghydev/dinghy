import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STORSIMPLE_DEVICE_MANAGERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/StorSimple_Device_Managers.svg;strokeColor=none;',
  },
  _original_width: 70,
  _original_height: 64,
}

export function StorsimpleDeviceManagers(props: NodeProps) {
  return (
    <Shape
      {...STORSIMPLE_DEVICE_MANAGERS}
      {...props}
      _style={extendStyle(STORSIMPLE_DEVICE_MANAGERS, props)}
    />
  )
}
