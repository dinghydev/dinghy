import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STEREOTYPE = {
  _style: 'shape=rect;html=1;whiteSpace=wrap;align=center;',
  _width: 160,
  _height: 80,
}

export function Stereotype(props: DiagramNodeProps) {
  return <Shape {...STEREOTYPE} {...props} />
}
