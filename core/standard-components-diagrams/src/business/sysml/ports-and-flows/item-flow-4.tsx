import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ITEM_FLOW_4 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.itemFlow;fontStyle=1;flowDir=e;flowType=none;spacingRight=20;whiteSpace=wrap;align=center;',
  },
  _original_width: 0,
  _original_height: 370,
}

export function ItemFlow4(props: DiagramNodeProps) {
  return (
    <Shape
      {...ITEM_FLOW_4}
      {...props}
      _style={extendStyle(ITEM_FLOW_4, props)}
    />
  )
}
