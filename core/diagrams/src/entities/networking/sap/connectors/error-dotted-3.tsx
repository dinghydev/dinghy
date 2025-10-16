import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ERROR_DOTTED_3 = {
  _style: {
    entity:
      'endArrow=none;html=1;strokeColor=#d20a0a;bendable=1;rounded=0;endFill=0;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=none;startFill=0;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;dashed=1;strokeWidth=1.5;dashPattern=1 4;',
  },
  _width: 120,
  _height: 0,
}

export function ErrorDotted3(props: DiagramNodeProps) {
  return (
    <Shape
      {...ERROR_DOTTED_3}
      {...props}
      _style={extendStyle(ERROR_DOTTED_3, props)}
    />
  )
}
