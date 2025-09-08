import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WARNING_2 = {
  _style: {
    entity:
      'endArrow=blockThin;html=1;strokeColor=#c35500;bendable=1;rounded=0;endFill=1;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=blockThin;startFill=1;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;strokeWidth=1.5;',
  },
  _original_width: 120,
  _original_height: 0,
}

export function Warning2(props: DiagramNodeProps) {
  return (
    <Shape {...WARNING_2} {...props} _style={extendStyle(WARNING_2, props)} />
  )
}
