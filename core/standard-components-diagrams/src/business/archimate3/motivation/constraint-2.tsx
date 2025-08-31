import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONSTRAINT_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.constraint;',
  },
  _width: 70,
  _height: 35,
}

export function Constraint2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONSTRAINT_2}
      {...props}
      _style={extendStyle(CONSTRAINT_2, props)}
    />
  )
}
