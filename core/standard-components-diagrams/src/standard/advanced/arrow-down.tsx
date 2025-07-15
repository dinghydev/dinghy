import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARROW_DOWN = {
  _style: 'shape=singleArrow;direction=south;whiteSpace=wrap;html=1;',
  _width: 60,
  _height: 100,
}

export function ArrowDown(props: DiagramNodeProps) {
  return <Shape {...ARROW_DOWN} {...props} />
}
