import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CORNER = {
  _style: 'shape=corner;whiteSpace=wrap;html=1;',
  _width: 80,
  _height: 80,
}

export function Corner(props: DiagramNodeProps) {
  return <Shape {...CORNER} {...props} />
}
