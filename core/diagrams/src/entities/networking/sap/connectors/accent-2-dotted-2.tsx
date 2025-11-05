import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACCENT_2_DOTTED_2 = {
  _style: {
    entity:
      'endArrow=blockThin;html=1;strokeColor=#5D36FF;bendable=1;rounded=0;endFill=1;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=blockThin;startFill=1;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;dashed=1;strokeWidth=1.5;dashPattern=1 4;',
  },
  _width: 120,
  _height: 0,
}

export function Accent2Dotted2(props: NodeProps) {
  return (
    <Shape
      {...ACCENT_2_DOTTED_2}
      {...props}
      _style={extendStyle(ACCENT_2_DOTTED_2, props)}
    />
  )
}
