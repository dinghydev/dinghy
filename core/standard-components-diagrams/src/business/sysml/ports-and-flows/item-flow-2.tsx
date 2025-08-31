import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ITEM_FLOW_2 = {
  _style:
    'html=1;shape=mxgraph.sysml.itemFlow;fontStyle=1;flowDir=N;flowType=in;whiteSpace=wrap;align=center;',
  _width: 1,
  _height: 180,
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
