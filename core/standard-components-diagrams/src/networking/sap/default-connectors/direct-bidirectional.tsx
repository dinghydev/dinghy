import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DIRECT_BIDIRECTIONAL = {
  _style: {
    entity:
      'endArrow=blockThin;html=1;strokeColor=#475E75;bendable=1;rounded=0;endFill=1;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=blockThin;startFill=1;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;strokeWidth=1.5;',
  },
  _width: 120,
  _height: 0,
}

export function DirectBidirectional(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIRECT_BIDIRECTIONAL}
      {...props}
      _style={extendStyle(DIRECT_BIDIRECTIONAL, props)}
    />
  )
}
