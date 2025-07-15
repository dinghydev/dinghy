import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STORAGE_QUEUE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Storage_Queue.svg;',
  _width: 64,
  _height: 52,
}

export function StorageQueue(props: DiagramNodeProps) {
  return <Shape {...STORAGE_QUEUE} {...props} />
}
