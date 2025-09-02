import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STORAGE_QUEUE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Storage_Queue.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 52,
}

export function StorageQueue(props: DiagramNodeProps) {
  return (
    <Shape
      {...STORAGE_QUEUE}
      {...props}
      _style={extendStyle(STORAGE_QUEUE, props)}
    />
  )
}
