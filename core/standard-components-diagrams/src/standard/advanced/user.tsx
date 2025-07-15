import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USER = {
  _style: 'shape=actor;whiteSpace=wrap;html=1;',
  _width: 40,
  _height: 60,
}

export function User(props: DiagramNodeProps) {
  return <Shape {...USER} {...props} />
}
