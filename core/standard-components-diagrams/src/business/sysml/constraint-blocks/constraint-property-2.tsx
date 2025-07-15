import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONSTRAINT_PROPERTY_2 = {
  _style: 'html=1;shape=mxgraph.sysml.consProp;overflow=fill;whiteSpace=wrap;',
  _width: 150,
  _height: 120,
}

export function ConstraintProperty2(props: DiagramNodeProps) {
  return <Shape {...CONSTRAINT_PROPERTY_2} {...props} />
}
