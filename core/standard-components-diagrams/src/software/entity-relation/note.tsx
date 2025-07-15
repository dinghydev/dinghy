import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NOTE = {
  _style: 'shape=note;size=20;whiteSpace=wrap;html=1;',
  _width: 100,
  _height: 100,
}

export function Note(props: DiagramNodeProps) {
  return <Shape {...NOTE} {...props} />
}
