import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NODE_GENERIC_GREEN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.node_generic;fillColor=#7FBA42;',
  },
  _original_width: 46,
  _original_height: 52,
}

export function NodeGenericGreen(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NODE_GENERIC_GREEN)} />
}
