import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ITEM_FLOW_4 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.itemFlow;fontStyle=1;flowDir=e;flowType=none;spacingRight=20;whiteSpace=wrap;align=center;',
  },
  _width: 0,
  _height: 370,
}

export function ItemFlow4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ITEM_FLOW_4)} />
}
