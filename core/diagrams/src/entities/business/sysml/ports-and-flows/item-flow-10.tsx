import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ITEM_FLOW_10 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.itemFlowRight;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _width: 200,
  _height: 120,
}

export function ItemFlow10(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ITEM_FLOW_10)} />
}
