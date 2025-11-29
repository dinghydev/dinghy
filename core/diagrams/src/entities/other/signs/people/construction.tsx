import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONSTRUCTION = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.construction;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 88,
  _original_height: 99,
}

export function Construction(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONSTRUCTION)} />
}
