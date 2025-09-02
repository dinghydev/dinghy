import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ERROR_DOTTED = {
  _style: {
    entity:
      'endArrow=blockThin;html=1;strokeColor=#d20a0a;bendable=1;rounded=0;endFill=1;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=none;startFill=0;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;dashed=1;strokeWidth=1.5;dashPattern=1 4;',
  },
  _original_width: 120,
  _original_height: 0,
}

export function ErrorDotted(props: DiagramNodeProps) {
  return (
    <Shape
      {...ERROR_DOTTED}
      {...props}
      _style={extendStyle(ERROR_DOTTED, props)}
    />
  )
}
