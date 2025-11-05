import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONSTRAINT_TEXTUAL_NOTE_2 = {
  _style: {
    entity:
      'verticalAlign=bottom;html=1;endArrow=none;edgeStyle=none;labelBackgroundColor=none;fontSize=10;strokeWidth=2;',
  },
  _width: 160,
  _height: 0,
}

export function ConstraintTextualNote2(props: NodeProps) {
  return (
    <Shape
      {...CONSTRAINT_TEXTUAL_NOTE_2}
      {...props}
      _style={extendStyle(CONSTRAINT_TEXTUAL_NOTE_2, props)}
    />
  )
}
