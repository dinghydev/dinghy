import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OBJECT = {
  _style: 'html=1;whiteSpace=wrap;',
  _width: 110,
  _height: 50,
}

export function Object(props: DiagramNodeProps) {
  return <Shape {...OBJECT} {...props} />
}
