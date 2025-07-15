import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECONDARY_PATH = {
  _style:
    'edgeStyle=orthogonalEdgeStyle;fontSize=12;html=1;endArrow=blockThin;endFill=1;rounded=0;strokeWidth=2;endSize=4;startSize=4;dashed=0;strokeColor=#9E9E9E;',
  _width: 100,
  _height: 0,
}

export function SecondaryPath(props: DiagramNodeProps) {
  return <Dependency {...SECONDARY_PATH} {...props} />
}
