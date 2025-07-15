import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRIMARY_PATH = {
  _style:
    'edgeStyle=orthogonalEdgeStyle;fontSize=12;html=1;endArrow=blockThin;endFill=1;rounded=0;strokeWidth=2;endSize=4;startSize=4;dashed=0;strokeColor=#4284F3;',
  _width: 100,
  _height: 0,
}

export function PrimaryPath(props: DiagramNodeProps) {
  return <Dependency {...PRIMARY_PATH} {...props} />
}
