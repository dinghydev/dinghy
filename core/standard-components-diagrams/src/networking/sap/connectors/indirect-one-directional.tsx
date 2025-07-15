import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INDIRECT_ONE_DIRECTIONAL = {
  _style:
    'endArrow=blockThin;html=1;strokeColor=#475e75;bendable=1;rounded=0;endFill=1;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=none;startFill=0;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;dashed=1;strokeWidth=1.5;',
  _width: 120,
  _height: 0,
}

export function IndirectOneDirectional(props: DiagramNodeProps) {
  return <Shape {...INDIRECT_ONE_DIRECTIONAL} {...props} />
}
