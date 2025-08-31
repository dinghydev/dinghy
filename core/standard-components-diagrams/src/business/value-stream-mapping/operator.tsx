import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPERATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.operator;',
  },
  _width: 100,
  _height: 84,
}

export function Operator(props: DiagramNodeProps) {
  return (
    <Shape {...OPERATOR} {...props} _style={extendStyle(OPERATOR, props)} />
  )
}
