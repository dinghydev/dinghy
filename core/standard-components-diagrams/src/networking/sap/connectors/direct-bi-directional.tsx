import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIRECT_BI_DIRECTIONAL = {
  _style: {
    entity:
      'endArrow=blockThin;html=1;strokeColor=#475E75;bendable=1;rounded=0;endFill=1;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=blockThin;startFill=1;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;strokeWidth=1.5;',
  },
  _width: 120,
  _height: 0,
}

export function DirectBiDirectional(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIRECT_BI_DIRECTIONAL}
      {...props}
      _style={extendStyle(DIRECT_BI_DIRECTIONAL, props)}
    />
  )
}
