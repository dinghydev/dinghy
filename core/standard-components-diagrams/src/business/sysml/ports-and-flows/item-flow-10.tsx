import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ITEM_FLOW_10 = {
  _style:
    'html=1;shape=mxgraph.sysml.itemFlowRight;fontStyle=1;whiteSpace=wrap;align=center;',
  _width: 200,
  _height: 120,
}

export function ItemFlow10(props: DiagramNodeProps) {
  return <Shape {...ITEM_FLOW_10} {...props} />
}
