import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONDITION_2 = {
  _style:
    'edgeStyle=orthogonalEdgeStyle;html=1;align=left;verticalAlign=bottom;endArrow=open;endSize=8;strokeColor=#ff0000;',
  _width: 1,
  _height: 100,
}

export function Condition2(props: DiagramNodeProps) {
  return <Shape {...CONDITION_2} {...props} />
}
