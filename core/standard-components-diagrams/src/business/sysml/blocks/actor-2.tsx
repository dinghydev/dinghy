import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACTOR_2 = {
  _style: 'shape=rect;html=1;overflow=fill;whiteSpace=wrap;align=center;',
  _width: 160,
  _height: 80,
}

export function Actor2(props: DiagramNodeProps) {
  return <Shape {...ACTOR_2} {...props} />
}
