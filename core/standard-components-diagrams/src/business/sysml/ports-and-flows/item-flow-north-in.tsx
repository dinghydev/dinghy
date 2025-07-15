import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ITEM_FLOW_NORTH_IN = {
  _style:
    'html=1;shape=mxgraph.sysml.itemFlow;fontStyle=1;flowDir=n;flowType=in;whiteSpace=wrap;align=center;',
  _width: 200,
  _height: 80,
}

export function ItemFlowNorthIn(props: DiagramNodeProps) {
  return <Shape {...ITEM_FLOW_NORTH_IN} {...props} />
}
