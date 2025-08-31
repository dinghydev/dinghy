import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUCCESS_DASHED_2 = {
  _style:
    'endArrow=none;html=1;strokeColor=#188918;bendable=1;rounded=0;endFill=0;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=none;startFill=0;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;dashed=1;strokeWidth=1.5;',
  _width: 120,
  _height: 0,
}

export function SuccessDashed2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUCCESS_DASHED_2}
      {...props}
      _style={extendStyle(SUCCESS_DASHED_2, props)}
    />
  )
}
