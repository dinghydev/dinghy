import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_STORSIMPLE_DEVICE_MANAGERS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/StorSimple.svg;strokeColor=none;',
  _width: 50,
  _height: 45,
}

export function AzureStorsimpleDeviceManagers(props: DiagramNodeProps) {
  return <Shape {...AZURE_STORSIMPLE_DEVICE_MANAGERS} {...props} />
}
