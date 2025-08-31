import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INDIRECT_ELBOW = {
  _style:
    'edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;fontSize=18;strokeColor=#475E75;fontFamily=Helvetica;fontColor=default;targetPerimeterSpacing=15;endSize=4;startSize=4;dashed=1;endArrow=blockThin;endFill=1;strokeWidth=1.5;startArrow=none;startFill=0;',
  _width: 120,
  _height: 20,
}

export function IndirectElbow(props: DiagramNodeProps) {
  return (
    <Shape
      {...INDIRECT_ELBOW}
      {...props}
      _style={extendStyle(INDIRECT_ELBOW, props)}
    />
  )
}
