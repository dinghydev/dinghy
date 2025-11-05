import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const QUEUE_GENERIC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.queue_generic;pointerEvents=1;',
  },
  _width: 50,
  _height: 15,
}

export function QueueGeneric(props: NodeProps) {
  return (
    <Shape
      {...QUEUE_GENERIC}
      {...props}
      _style={extendStyle(QUEUE_GENERIC, props)}
    />
  )
}
