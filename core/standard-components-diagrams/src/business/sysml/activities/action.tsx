import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACTION = {
  _style: 'shape=rect;html=1;rounded=1;whiteSpace=wrap;align=center;',
  _width: 160,
  _height: 80,
}

export function Action(props: DiagramNodeProps) {
  return <Shape {...ACTION} {...props} />
}
