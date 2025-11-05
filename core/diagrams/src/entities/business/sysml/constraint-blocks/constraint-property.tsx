import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONSTRAINT_PROPERTY = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.paramDgm;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _width: 150,
  _height: 100,
}

export function ConstraintProperty(props: NodeProps) {
  return (
    <Shape
      {...CONSTRAINT_PROPERTY}
      {...props}
      _style={extendStyle(CONSTRAINT_PROPERTY, props)}
    />
  )
}
