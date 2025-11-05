import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ITEM_FLOW_9 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.itemFlowLeft;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _width: 200,
  _height: 120,
}

export function ItemFlow9(props: NodeProps) {
  return (
    <Shape
      {...ITEM_FLOW_9}
      {...props}
      _style={extendStyle(ITEM_FLOW_9, props)}
    />
  )
}
