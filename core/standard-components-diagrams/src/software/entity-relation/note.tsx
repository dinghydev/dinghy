import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NOTE = {
  _style: {
    entity: 'shape=note;size=20;whiteSpace=wrap;html=1;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Note(props: DiagramNodeProps) {
  return <Shape {...NOTE} {...props} _style={extendStyle(NOTE, props)} />
}
