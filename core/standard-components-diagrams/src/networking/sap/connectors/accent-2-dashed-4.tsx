import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACCENT_2_DASHED_4 = {
  _style: {
    entity:
      'edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;fontSize=18;strokeColor=#5D36FF;fontFamily=Helvetica;fontColor=default;targetPerimeterSpacing=15;endSize=4;startSize=4;dashed=1;endArrow=blockThin;endFill=1;strokeWidth=1.5;startArrow=none;startFill=0;',
  },
  _original_width: 120,
  _original_height: 20,
}

export function Accent2Dashed4(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACCENT_2_DASHED_4}
      {...props}
      _style={extendStyle(ACCENT_2_DASHED_4, props)}
    />
  )
}
