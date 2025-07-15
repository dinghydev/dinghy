import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONSTRAINT = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ccccff;shape=mxgraph.archimate.motiv;motivType=const',
  _width: 100,
  _height: 75,
}

export function Constraint(props: DiagramNodeProps) {
  return <Shape {...CONSTRAINT} {...props} />
}
