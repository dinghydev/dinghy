import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACTOR_2 = {
  _style: 'html=1;align=center;verticalAlign=middle;dashed=0;whiteSpace=wrap;',
  _width: 160,
  _height: 70,
}

export function Actor2(props: DiagramNodeProps) {
  return <Shape {...ACTOR_2} {...props} />
}
