import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONSTRAINT_PROPERTY = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.paramDgm;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _original_width: 150,
  _original_height: 100,
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
