import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONSTRAINT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ccccff;shape=mxgraph.archimate.motiv;motivType=const',
  },
  _width: 100,
  _height: 75,
}

export function Constraint(props: DiagramNodeProps) {
  return (
    <Shape {...CONSTRAINT} {...props} _style={extendStyle(CONSTRAINT, props)} />
  )
}
