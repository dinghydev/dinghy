import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRINCIPLE_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.principle;strokeWidth=2;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function Principle2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PRINCIPLE_2)} />
}
