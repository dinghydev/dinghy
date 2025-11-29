import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NO = {
  _style: {
    entity:
      'shape=mxgraph.signs.safety.no;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 99,
}

export function No(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NO)} />
}
