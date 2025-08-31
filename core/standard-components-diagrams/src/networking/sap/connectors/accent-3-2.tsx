import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACCENT_3_2 = {
  _style: {
    entity:
      'endArrow=blockThin;html=1;strokeColor=#CB00DC;bendable=1;rounded=0;endFill=1;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=blockThin;startFill=1;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;strokeWidth=1.5;',
  },
  _width: 120,
  _height: 0,
}

export function Accent32(props: DiagramNodeProps) {
  return (
    <Shape {...ACCENT_3_2} {...props} _style={extendStyle(ACCENT_3_2, props)} />
  )
}
