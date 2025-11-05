import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PLAIN_OPTIONAL = {
  _style: {
    entity:
      'endArrow=none;html=1;strokeColor=#475E75;bendable=1;rounded=0;endFill=0;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=none;startFill=0;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;dashed=1;strokeWidth=1.5;dashPattern=1 4;',
  },
  _width: 120,
  _height: 0,
}

export function PlainOptional(props: NodeProps) {
  return (
    <Shape
      {...PLAIN_OPTIONAL}
      {...props}
      _style={extendStyle(PLAIN_OPTIONAL, props)}
    />
  )
}
