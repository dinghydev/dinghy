import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACCENT_3_DOTTED_3 = {
  _style:
    'endArrow=none;html=1;strokeColor=#CB00DC;bendable=1;rounded=0;endFill=0;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=none;startFill=0;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;dashed=1;strokeWidth=1.5;dashPattern=1 4;',
  _width: 120,
  _height: 0,
}

export function Accent3Dotted3(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACCENT_3_DOTTED_3}
      {...props}
      _style={extendStyle(ACCENT_3_DOTTED_3, props)}
    />
  )
}
