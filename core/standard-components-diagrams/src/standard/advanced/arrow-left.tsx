import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARROW_LEFT = {
  _style: 'shape=singleArrow;direction=west;whiteSpace=wrap;html=1;',
  _width: 100,
  _height: 60,
}

export function ArrowLeft(props: DiagramNodeProps) {
  return <Shape {...ARROW_LEFT} {...props} />
}
