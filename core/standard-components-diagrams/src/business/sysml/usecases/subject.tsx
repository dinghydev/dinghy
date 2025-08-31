import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUBJECT = {
  _style: {
    entity:
      'shape=rect;html=1;verticalAlign=top;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _width: 120,
  _height: 60,
}

export function Subject(props: DiagramNodeProps) {
  return <Shape {...SUBJECT} {...props} _style={extendStyle(SUBJECT, props)} />
}
