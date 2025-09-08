import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ITEM_FLOW_2 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.itemFlow;fontStyle=1;flowDir=N;flowType=in;whiteSpace=wrap;align=center;',
  },
  _original_width: 1,
  _original_height: 180,
}

export function ItemFlow2(props: DiagramNodeProps) {
  return (
    <Shape
      {...ITEM_FLOW_2}
      {...props}
      _style={extendStyle(ITEM_FLOW_2, props)}
    />
  )
}
