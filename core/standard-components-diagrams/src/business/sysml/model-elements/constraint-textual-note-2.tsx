import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONSTRAINT_TEXTUAL_NOTE_2 = {
  _style: {
    entity:
      'verticalAlign=bottom;html=1;endArrow=none;edgeStyle=none;labelBackgroundColor=none;fontSize=10;strokeWidth=2;',
  },
  _original_width: 160,
  _original_height: 0,
}

export function ConstraintTextualNote2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONSTRAINT_TEXTUAL_NOTE_2}
      {...props}
      _style={extendStyle(CONSTRAINT_TEXTUAL_NOTE_2, props)}
    />
  )
}
