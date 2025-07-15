import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STORAGE_QUEUE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.storage_queue;',
  _width: 50,
  _height: 45,
}

export function StorageQueue(props: DiagramNodeProps) {
  return <Shape {...STORAGE_QUEUE} {...props} />
}
