import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OPERATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.operator;',
  },
  _original_width: 100,
  _original_height: 84,
}

export function Operator(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OPERATOR)} />
}
