import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INDIRECT_BI_DIRECTIONAL = {
  _style:
    'endArrow=blockThin;html=1;strokeColor=#475e75;bendable=1;rounded=0;endFill=1;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=blockThin;startFill=1;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;dashed=1;strokeWidth=1.5;',
  _width: 120,
  _height: 0,
}

export function IndirectBiDirectional(props: DiagramNodeProps) {
  return (
    <Shape
      {...INDIRECT_BI_DIRECTIONAL}
      {...props}
      _style={extendStyle(INDIRECT_BI_DIRECTIONAL, props)}
    />
  )
}
