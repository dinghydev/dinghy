import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STORAGE_QUEUE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Storage_Queue.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 52,
}

export function StorageQueue(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STORAGE_QUEUE)} />
}
