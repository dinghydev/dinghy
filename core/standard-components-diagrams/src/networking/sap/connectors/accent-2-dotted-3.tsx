import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACCENT_2_DOTTED_3 = {
  _style:
    'endArrow=none;html=1;strokeColor=#5D36FF;bendable=1;rounded=0;endFill=0;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=none;startFill=0;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;dashed=1;strokeWidth=1.5;dashPattern=1 4;',
  _width: 120,
  _height: 0,
}

export function Accent2Dotted3(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACCENT_2_DOTTED_3}
      {...props}
      _style={extendStyle(ACCENT_2_DOTTED_3, props)}
    />
  )
}
