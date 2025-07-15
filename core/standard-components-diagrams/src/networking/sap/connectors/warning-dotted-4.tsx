import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WARNING_DOTTED_4 = {
  _style:
    'edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;fontSize=18;strokeColor=#c35500;fontFamily=Helvetica;fontColor=default;targetPerimeterSpacing=15;endSize=4;startSize=4;endArrow=blockThin;endFill=1;strokeWidth=1.5;startArrow=none;startFill=0;dashed=1;dashPattern=1 4;',
  _width: 120,
  _height: 20,
}

export function WarningDotted4(props: DiagramNodeProps) {
  return <Shape {...WARNING_DOTTED_4} {...props} />
}
