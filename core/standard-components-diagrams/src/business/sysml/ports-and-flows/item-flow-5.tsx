import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ITEM_FLOW_5 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.itemFlow;fontStyle=1;flowDir=w;flowType=none;spacingLeft=15;whiteSpace=wrap;align=center;',
  },
  _original_width: 1,
  _original_height: 370,
}

export function ItemFlow5(props: DiagramNodeProps) {
  return (
    <Shape
      {...ITEM_FLOW_5}
      {...props}
      _style={extendStyle(ITEM_FLOW_5, props)}
    />
  )
}
