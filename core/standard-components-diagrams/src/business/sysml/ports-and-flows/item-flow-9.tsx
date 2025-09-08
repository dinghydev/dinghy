import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ITEM_FLOW_9 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.itemFlowLeft;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _original_width: 200,
  _original_height: 120,
}

export function ItemFlow9(props: DiagramNodeProps) {
  return (
    <Shape
      {...ITEM_FLOW_9}
      {...props}
      _style={extendStyle(ITEM_FLOW_9, props)}
    />
  )
}
