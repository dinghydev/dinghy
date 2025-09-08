import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DIRECT_ELBOW = {
  _style: {
    entity:
      'edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;fontSize=18;strokeColor=#475E75;fontFamily=Helvetica;fontColor=default;targetPerimeterSpacing=15;endSize=4;startSize=4;endArrow=blockThin;endFill=1;strokeWidth=1.5;startArrow=none;startFill=0;',
  },
  _original_width: 120,
  _original_height: 20,
}

export function DirectElbow(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIRECT_ELBOW}
      {...props}
      _style={extendStyle(DIRECT_ELBOW, props)}
    />
  )
}
