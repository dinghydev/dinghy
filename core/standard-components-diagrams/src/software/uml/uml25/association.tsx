import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ASSOCIATION = {
  _style: 'fontStyle=1;whiteSpace=wrap;html=1;',
  _width: 140,
  _height: 30,
}

export function Association(props: DiagramNodeProps) {
  return <Shape {...ASSOCIATION} {...props} />
}
