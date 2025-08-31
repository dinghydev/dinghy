import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACCENT_3_DASHED_4 = {
  _style: {
    entity:
      'edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;fontSize=18;strokeColor=#CB00DC;fontFamily=Helvetica;fontColor=default;targetPerimeterSpacing=15;endSize=4;startSize=4;dashed=1;endArrow=blockThin;endFill=1;strokeWidth=1.5;startArrow=none;startFill=0;',
  },
  _width: 120,
  _height: 20,
}

export function Accent3Dashed4(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACCENT_3_DASHED_4}
      {...props}
      _style={extendStyle(ACCENT_3_DASHED_4, props)}
    />
  )
}
