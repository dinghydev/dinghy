import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONSTRAINT = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.application;appType=constraint;archiType=oct;',
  _width: 150,
  _height: 75,
}

export function Constraint(props: DiagramNodeProps) {
  return (
    <Shape {...CONSTRAINT} {...props} _style={extendStyle(CONSTRAINT, props)} />
  )
}
