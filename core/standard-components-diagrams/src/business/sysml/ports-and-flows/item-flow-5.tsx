import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ITEM_FLOW_5 = {
  _style:
    'html=1;shape=mxgraph.sysml.itemFlow;fontStyle=1;flowDir=w;flowType=none;spacingLeft=15;whiteSpace=wrap;align=center;',
  _width: 1,
  _height: 370,
}

export function ItemFlow5(props: DiagramNodeProps) {
  return <Shape {...ITEM_FLOW_5} {...props} />
}
