import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONSTRAINT_PRECONDITION_POSTCONDITION = {
  _style:
    'shape=note2;boundedLbl=1;whiteSpace=wrap;html=1;size=25;verticalAlign=top;align=left;spacingLeft=5;whiteSpace=wrap;',
  _width: 0,
  _height: 60,
}

export function ConstraintPreconditionPostcondition(props: DiagramNodeProps) {
  return <Shape {...CONSTRAINT_PRECONDITION_POSTCONDITION} {...props} />
}
