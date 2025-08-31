import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NOTE = {
  _style: {
    entity: 'shape=note;size=20;whiteSpace=wrap;html=1;',
  },
  _width: 60,
  _height: 60,
}

export function Note(props: DiagramNodeProps) {
  return <Shape {...NOTE} {...props} _style={extendStyle(NOTE, props)} />
}
