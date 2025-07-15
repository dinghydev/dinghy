import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COLLATE = {
  _style: 'shape=collate;whiteSpace=wrap;html=1;',
  _width: 80,
  _height: 80,
}

export function Collate(props: DiagramNodeProps) {
  return <Shape {...COLLATE} {...props} />
}
