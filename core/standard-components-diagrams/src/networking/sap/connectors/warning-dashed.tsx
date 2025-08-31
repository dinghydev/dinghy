import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WARNING_DASHED = {
  _style:
    'endArrow=blockThin;html=1;strokeColor=#c35500;bendable=1;rounded=0;endFill=1;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=none;startFill=0;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;dashed=1;strokeWidth=1.5;',
  _width: 120,
  _height: 0,
}

export function WarningDashed(props: DiagramNodeProps) {
  return (
    <Shape
      {...WARNING_DASHED}
      {...props}
      _style={extendStyle(WARNING_DASHED, props)}
    />
  )
}
