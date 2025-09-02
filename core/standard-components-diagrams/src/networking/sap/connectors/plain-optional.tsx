import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PLAIN_OPTIONAL = {
  _style: {
    entity:
      'endArrow=none;html=1;strokeColor=#475E75;bendable=1;rounded=0;endFill=0;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=none;startFill=0;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;dashed=1;strokeWidth=1.5;dashPattern=1 4;',
  },
  _original_width: 120,
  _original_height: 0,
}

export function PlainOptional(props: DiagramNodeProps) {
  return (
    <Shape
      {...PLAIN_OPTIONAL}
      {...props}
      _style={extendStyle(PLAIN_OPTIONAL, props)}
    />
  )
}
