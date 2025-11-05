import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONSTRAINT_PRECONDITION_POSTCONDITION = {
  _style: {
    entity:
      'shape=note2;boundedLbl=1;whiteSpace=wrap;html=1;size=25;verticalAlign=top;align=left;spacingLeft=5;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 60,
}

export function ConstraintPreconditionPostcondition(props: NodeProps) {
  return (
    <Shape
      {...CONSTRAINT_PRECONDITION_POSTCONDITION}
      {...props}
      _style={extendStyle(CONSTRAINT_PRECONDITION_POSTCONDITION, props)}
    />
  )
}
