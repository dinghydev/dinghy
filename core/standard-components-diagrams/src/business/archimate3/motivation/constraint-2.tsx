import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONSTRAINT_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.constraint;',
  _width: 70,
  _height: 35,
}

export function Constraint2(props: DiagramNodeProps) {
  return <Shape {...CONSTRAINT_2} {...props} />
}
