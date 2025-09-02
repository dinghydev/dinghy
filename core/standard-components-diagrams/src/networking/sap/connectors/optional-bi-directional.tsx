import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPTIONAL_BI_DIRECTIONAL = {
  _style: {
    entity:
      'endArrow=blockThin;html=1;strokeColor=#475e75;bendable=1;rounded=0;endFill=1;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=blockThin;startFill=1;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;dashed=1;strokeWidth=1.5;dashPattern=1 4;',
  },
  _original_width: 120,
  _original_height: 0,
}

export function OptionalBiDirectional(props: DiagramNodeProps) {
  return (
    <Shape
      {...OPTIONAL_BI_DIRECTIONAL}
      {...props}
      _style={extendStyle(OPTIONAL_BI_DIRECTIONAL, props)}
    />
  )
}
