import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACCENT_1_DOTTED_4 = {
  _style: {
    entity:
      'edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;fontSize=18;strokeColor=#07838F;fontFamily=Helvetica;fontColor=default;targetPerimeterSpacing=15;endSize=4;startSize=4;endArrow=blockThin;endFill=1;strokeWidth=1.5;startArrow=none;startFill=0;dashed=1;dashPattern=1 4;',
  },
  _original_width: 120,
  _original_height: 20,
}

export function Accent1Dotted4(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACCENT_1_DOTTED_4}
      {...props}
      _style={extendStyle(ACCENT_1_DOTTED_4, props)}
    />
  )
}
