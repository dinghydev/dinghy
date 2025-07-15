import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTAINER = {
  _style: 'swimlane;',
  _width: 200,
  _height: 200,
}

export function Container(props: DiagramNodeProps) {
  return <Shape {...CONTAINER} {...props} />
}
