import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HORIZONTAL_CONTAINER = {
  _style: 'swimlane;horizontal=0;whiteSpace=wrap;html=1;',
  _width: 200,
  _height: 200,
}

export function HorizontalContainer(props: DiagramNodeProps) {
  return <Shape {...HORIZONTAL_CONTAINER} {...props} />
}
