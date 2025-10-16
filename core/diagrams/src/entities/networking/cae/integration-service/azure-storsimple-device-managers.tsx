import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AZURE_STORSIMPLE_DEVICE_MANAGERS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/StorSimple.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function AzureStorsimpleDeviceManagers(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_STORSIMPLE_DEVICE_MANAGERS}
      {...props}
      _style={extendStyle(AZURE_STORSIMPLE_DEVICE_MANAGERS, props)}
    />
  )
}
