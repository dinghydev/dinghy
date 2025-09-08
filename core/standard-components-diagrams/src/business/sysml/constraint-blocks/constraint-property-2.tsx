import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONSTRAINT_PROPERTY_2 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.consProp;overflow=fill;whiteSpace=wrap;',
  },
  _original_width: 150,
  _original_height: 120,
}

export function ConstraintProperty2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONSTRAINT_PROPERTY_2}
      {...props}
      _style={extendStyle(CONSTRAINT_PROPERTY_2, props)}
    />
  )
}
