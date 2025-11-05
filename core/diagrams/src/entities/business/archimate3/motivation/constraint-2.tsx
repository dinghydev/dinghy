import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONSTRAINT_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.constraint;',
  },
  _width: 70,
  _height: 35,
}

export function Constraint2(props: NodeProps) {
  return (
    <Shape
      {...CONSTRAINT_2}
      {...props}
      _style={extendStyle(CONSTRAINT_2, props)}
    />
  )
}
