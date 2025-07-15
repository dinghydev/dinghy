import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARROW_UP = {
  _style: 'shape=singleArrow;direction=north;whiteSpace=wrap;html=1;',
  _width: 60,
  _height: 100,
}

export function ArrowUp(props: DiagramNodeProps) {
  return <Shape {...ARROW_UP} {...props} />
}
