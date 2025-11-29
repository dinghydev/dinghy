import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STACK_EDGE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Data_Box_Edge.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 48.72,
}

export function StackEdge(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STACK_EDGE)} />
}
