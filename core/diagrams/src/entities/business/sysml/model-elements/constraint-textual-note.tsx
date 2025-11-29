import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONSTRAINT_TEXTUAL_NOTE = {
  _style: {
    entity:
      'shape=rect;strokeWidth=2;fontStyle=1;html=1;whiteSpace=wrap;align=center;',
  },
  _width: 160,
  _height: 60,
}

export function ConstraintTextualNote(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, CONSTRAINT_TEXTUAL_NOTE)} />
  )
}
