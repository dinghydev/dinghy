import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STORSIMPLE_DEVICE_MANAGERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/StorSimple_Device_Managers.svg;strokeColor=none;',
  },
  _width: 70,
  _height: 64,
}

export function StorsimpleDeviceManagers(props: DiagramNodeProps) {
  return (
    <Shape
      {...STORSIMPLE_DEVICE_MANAGERS}
      {...props}
      _style={extendStyle(STORSIMPLE_DEVICE_MANAGERS, props)}
    />
  )
}
