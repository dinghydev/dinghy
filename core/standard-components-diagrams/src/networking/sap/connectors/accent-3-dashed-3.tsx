import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACCENT_3_DASHED_3 = {
  _style: {
    entity:
      'endArrow=none;html=1;strokeColor=#CB00DC;bendable=1;rounded=0;endFill=0;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=none;startFill=0;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;dashed=1;strokeWidth=1.5;',
  },
  _original_width: 120,
  _original_height: 0,
}

export function Accent3Dashed3(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACCENT_3_DASHED_3}
      {...props}
      _style={extendStyle(ACCENT_3_DASHED_3, props)}
    />
  )
}
