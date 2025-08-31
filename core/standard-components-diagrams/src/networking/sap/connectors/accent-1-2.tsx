import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACCENT_1_2 = {
  _style: {
    entity:
      'endArrow=blockThin;html=1;strokeColor=#07838F;bendable=1;rounded=0;endFill=1;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=blockThin;startFill=1;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;strokeWidth=1.5;',
  },
  _width: 120,
  _height: 0,
}

export function Accent12(props: DiagramNodeProps) {
  return (
    <Shape {...ACCENT_1_2} {...props} _style={extendStyle(ACCENT_1_2, props)} />
  )
}
