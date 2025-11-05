import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STORAGE_QUEUE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.storage_queue;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function StorageQueue(props: NodeProps) {
  return (
    <Shape
      {...STORAGE_QUEUE}
      {...props}
      _style={extendStyle(STORAGE_QUEUE, props)}
    />
  )
}
