import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ITEM_FLOW = {
  _style:
    'html=1;shape=mxgraph.sysml.itemFlow;fontStyle=1;flowDir=S;flowType=out;whiteSpace=wrap;align=center;',
  _width: 120,
  _height: 180,
}

export function ItemFlow(props: DiagramNodeProps) {
  return <Shape {...ITEM_FLOW} {...props} />
}
