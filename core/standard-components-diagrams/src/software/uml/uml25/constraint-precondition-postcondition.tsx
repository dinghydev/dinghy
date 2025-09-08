import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONSTRAINT_PRECONDITION_POSTCONDITION = {
  _style: {
    entity:
      'shape=note2;boundedLbl=1;whiteSpace=wrap;html=1;size=25;verticalAlign=top;align=left;spacingLeft=5;whiteSpace=wrap;',
  },
  _original_width: 0,
  _original_height: 60,
}

export function ConstraintPreconditionPostcondition(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONSTRAINT_PRECONDITION_POSTCONDITION}
      {...props}
      _style={extendStyle(CONSTRAINT_PRECONDITION_POSTCONDITION, props)}
    />
  )
}
