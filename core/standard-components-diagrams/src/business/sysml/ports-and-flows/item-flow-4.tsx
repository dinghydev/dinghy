import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ITEM_FLOW_4 = {
  _style:
    'html=1;shape=mxgraph.sysml.itemFlow;fontStyle=1;flowDir=e;flowType=none;spacingRight=20;whiteSpace=wrap;align=center;',
  _width: 0,
  _height: 370,
}

export function ItemFlow4(props: DiagramNodeProps) {
  return <Shape {...ITEM_FLOW_4} {...props} />
}
