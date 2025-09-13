import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PLAIN_DIRECT = {
  _style: {
    entity:
      'endArrow=none;html=1;strokeColor=#475e75;bendable=1;rounded=0;endFill=0;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=none;startFill=0;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;strokeWidth=1.5;',
  },
  _width: 120,
  _height: 0,
}

export function PlainDirect(props: DiagramNodeProps) {
  return (
    <Shape
      {...PLAIN_DIRECT}
      {...props}
      _style={extendStyle(PLAIN_DIRECT, props)}
    />
  )
}
