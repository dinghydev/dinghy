import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NOTE = {
  _style:
    'shape=note;whiteSpace=wrap;html=1;backgroundOutline=1;darkOpacity=0.05;',
  _width: 80,
  _height: 100,
}

export function Note(props: DiagramNodeProps) {
  return <Shape {...NOTE} {...props} />
}
