import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OBJECT = {
  _style: 'shape=cloud;whiteSpace=wrap;html=1;',
  _width: 120,
  _height: 120,
}

export function Object(props: DiagramNodeProps) {
  return <Shape {...OBJECT} {...props} />
}
