import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACCENT_1_DASHED = {
  _style: {
    entity:
      'endArrow=blockThin;html=1;strokeColor=#07838F;bendable=1;rounded=0;endFill=1;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=none;startFill=0;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;dashed=1;strokeWidth=1.5;',
  },
  _width: 120,
  _height: 0,
}

export function Accent1Dashed(props: NodeProps) {
  return (
    <Shape
      {...ACCENT_1_DASHED}
      {...props}
      _style={extendStyle(ACCENT_1_DASHED, props)}
    />
  )
}
