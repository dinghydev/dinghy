import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STORSIMPLE_DEVICE_MANAGERS = {
  _style: {
    entity:
      'aspect=fixed;verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.storsimple;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function StorsimpleDeviceManagers(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, STORSIMPLE_DEVICE_MANAGERS)} />
  )
}
