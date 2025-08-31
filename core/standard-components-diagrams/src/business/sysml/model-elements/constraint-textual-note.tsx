import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONSTRAINT_TEXTUAL_NOTE = {
  _style:
    'shape=rect;strokeWidth=2;fontStyle=1;html=1;whiteSpace=wrap;align=center;',
  _width: 160,
  _height: 60,
}

export function ConstraintTextualNote(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONSTRAINT_TEXTUAL_NOTE}
      {...props}
      _style={extendStyle(CONSTRAINT_TEXTUAL_NOTE, props)}
    />
  )
}
