import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STACK_EDGE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Azure_Stack_Edge.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 48,
}

export function StackEdge(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STACK_EDGE)} />
}
