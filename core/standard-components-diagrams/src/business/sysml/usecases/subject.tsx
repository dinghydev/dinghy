import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SUBJECT = {
  _style: {
    entity:
      'shape=rect;html=1;verticalAlign=top;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _original_width: 120,
  _original_height: 60,
}

export function Subject(props: DiagramNodeProps) {
  return <Shape {...SUBJECT} {...props} _style={extendStyle(SUBJECT, props)} />
}
