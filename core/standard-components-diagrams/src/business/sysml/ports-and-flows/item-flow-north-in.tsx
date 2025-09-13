import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ITEM_FLOW_NORTH_IN = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.itemFlow;fontStyle=1;flowDir=n;flowType=in;whiteSpace=wrap;align=center;',
  },
  _width: 200,
  _height: 80,
}

export function ItemFlowNorthIn(props: DiagramNodeProps) {
  return (
    <Shape
      {...ITEM_FLOW_NORTH_IN}
      {...props}
      _style={extendStyle(ITEM_FLOW_NORTH_IN, props)}
    />
  )
}
