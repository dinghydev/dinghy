import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ITEM_FLOW_EAST_OUT = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.itemFlow;fontStyle=1;flowDir=e;flowType=out;whiteSpace=wrap;align=center;',
  },
  _width: 200,
  _height: 80,
}

export function ItemFlowEastOut(props: DiagramNodeProps) {
  return (
    <Shape
      {...ITEM_FLOW_EAST_OUT}
      {...props}
      _style={extendStyle(ITEM_FLOW_EAST_OUT, props)}
    />
  )
}
