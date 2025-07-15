import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NOTE = {
  _style:
    'shape=note;strokeWidth=2;fontSize=14;size=20;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;fontColor=#666600;',
  _width: 110.00000000000001,
  _height: 80,
}

export function Note(props: DiagramNodeProps) {
  return <Shape {...NOTE} {...props} />
}
