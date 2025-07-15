import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JADE = {
  _style: 'fillColor=#00AD69;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 50,
  _height: 50,
}

export function Jade(props: DiagramNodeProps) {
  return <Shape {...JADE} {...props} />
}
