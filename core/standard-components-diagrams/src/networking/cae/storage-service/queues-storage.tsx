import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const QUEUES_STORAGE = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Queues_Storage.svg;strokeColor=none;',
  _width: 50,
  _height: 44,
}

export function QueuesStorage(props: DiagramNodeProps) {
  return (
    <Shape
      {...QUEUES_STORAGE}
      {...props}
      _style={extendStyle(QUEUES_STORAGE, props)}
    />
  )
}
