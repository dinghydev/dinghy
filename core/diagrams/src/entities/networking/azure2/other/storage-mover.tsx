import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STORAGE_MOVER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Storage_Mover.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 66.88,
}

export function StorageMover(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STORAGE_MOVER)} />
}
