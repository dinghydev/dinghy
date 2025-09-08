import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SUCCESS_DASHED_3 = {
  _style: {
    entity:
      'endArrow=blockThin;html=1;strokeColor=#188918;bendable=1;rounded=0;endFill=1;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=blockThin;startFill=1;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;dashed=1;strokeWidth=1.5;',
  },
  _original_width: 120,
  _original_height: 0,
}

export function SuccessDashed3(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUCCESS_DASHED_3}
      {...props}
      _style={extendStyle(SUCCESS_DASHED_3, props)}
    />
  )
}
