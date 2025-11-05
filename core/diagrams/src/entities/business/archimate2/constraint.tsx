import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONSTRAINT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ccccff;shape=mxgraph.archimate.motiv;motivType=const',
  },
  _width: 100,
  _height: 75,
}

export function Constraint(props: NodeProps) {
  return (
    <Shape {...CONSTRAINT} {...props} _style={extendStyle(CONSTRAINT, props)} />
  )
}
