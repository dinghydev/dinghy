import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ERROR_DASHED = {
  _style: {
    entity:
      'endArrow=blockThin;html=1;strokeColor=#d20a0a;bendable=1;rounded=0;endFill=1;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=none;startFill=0;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;dashed=1;strokeWidth=1.5;',
  },
  _width: 120,
  _height: 0,
}

export function ErrorDashed(props: DiagramNodeProps) {
  return (
    <Shape
      {...ERROR_DASHED}
      {...props}
      _style={extendStyle(ERROR_DASHED, props)}
    />
  )
}
