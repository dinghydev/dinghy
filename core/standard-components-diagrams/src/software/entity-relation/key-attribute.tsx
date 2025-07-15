import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KEY_ATTRIBUTE = {
  _style: 'ellipse;whiteSpace=wrap;html=1;align=center;fontStyle=4;',
  _width: 100,
  _height: 40,
}

export function KeyAttribute(props: DiagramNodeProps) {
  return <Shape {...KEY_ATTRIBUTE} {...props} />
}
