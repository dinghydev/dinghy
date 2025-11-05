import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NODE_GENERIC = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.node_generic;',
  },
  _original_width: 46,
  _original_height: 52,
}

export function NodeGeneric(props: NodeProps) {
  return (
    <Shape
      {...NODE_GENERIC}
      {...props}
      _style={extendStyle(NODE_GENERIC, props)}
    />
  )
}
