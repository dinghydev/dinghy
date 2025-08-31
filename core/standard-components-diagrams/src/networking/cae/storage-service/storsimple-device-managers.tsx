import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STORSIMPLE_DEVICE_MANAGERS = {
  _style:
    'aspect=fixed;verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.storsimple;',
  _width: 50,
  _height: 45,
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
