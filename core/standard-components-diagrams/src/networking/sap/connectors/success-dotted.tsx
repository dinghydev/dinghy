import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUCCESS_DOTTED = {
  _style: {
    entity:
      'endArrow=blockThin;html=1;strokeColor=#188918;bendable=1;rounded=0;endFill=1;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=none;startFill=0;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;dashed=1;strokeWidth=1.5;dashPattern=1 4;',
  },
  _width: 120,
  _height: 0,
}

export function SuccessDotted(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUCCESS_DOTTED}
      {...props}
      _style={extendStyle(SUCCESS_DOTTED, props)}
    />
  )
}
