import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONSTRAINT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.application;appType=constraint;archiType=oct;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function Constraint(props: DiagramNodeProps) {
  return (
    <Shape {...CONSTRAINT} {...props} _style={extendStyle(CONSTRAINT, props)} />
  )
}
