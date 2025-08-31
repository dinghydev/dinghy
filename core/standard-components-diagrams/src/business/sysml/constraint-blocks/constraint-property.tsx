import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONSTRAINT_PROPERTY = {
  _style:
    'html=1;shape=mxgraph.sysml.paramDgm;fontStyle=1;whiteSpace=wrap;align=center;',
  _width: 150,
  _height: 100,
}

export function ConstraintProperty(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONSTRAINT_PROPERTY}
      {...props}
      _style={extendStyle(CONSTRAINT_PROPERTY, props)}
    />
  )
}
