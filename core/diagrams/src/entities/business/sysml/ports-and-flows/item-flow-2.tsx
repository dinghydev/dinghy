import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ITEM_FLOW_2 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.itemFlow;fontStyle=1;flowDir=N;flowType=in;whiteSpace=wrap;align=center;',
  },
  _width: 1,
  _height: 180,
}

export function ItemFlow2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ITEM_FLOW_2)} />
}
