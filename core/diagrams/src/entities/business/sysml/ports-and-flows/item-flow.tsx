import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ITEM_FLOW = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.itemFlow;fontStyle=1;flowDir=S;flowType=out;whiteSpace=wrap;align=center;',
  },
  _width: 120,
  _height: 180,
}

export function ItemFlow(props: NodeProps) {
  return (
    <Shape {...ITEM_FLOW} {...props} _style={extendStyle(ITEM_FLOW, props)} />
  )
}
