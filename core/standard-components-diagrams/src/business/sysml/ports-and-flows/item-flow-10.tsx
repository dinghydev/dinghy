import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ITEM_FLOW_10 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.itemFlowRight;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _original_width: 200,
  _original_height: 120,
}

export function ItemFlow10(props: DiagramNodeProps) {
  return (
    <Shape
      {...ITEM_FLOW_10}
      {...props}
      _style={extendStyle(ITEM_FLOW_10, props)}
    />
  )
}
