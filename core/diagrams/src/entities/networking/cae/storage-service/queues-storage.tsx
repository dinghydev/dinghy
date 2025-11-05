import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const QUEUES_STORAGE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Queues_Storage.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 44,
}

export function QueuesStorage(props: NodeProps) {
  return (
    <Shape
      {...QUEUES_STORAGE}
      {...props}
      _style={extendStyle(QUEUES_STORAGE, props)}
    />
  )
}
