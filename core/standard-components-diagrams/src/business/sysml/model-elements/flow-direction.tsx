import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FLOW_DIRECTION = {
  _style: 'shape=triangle;fillColor=strokeColor;',
  _width: 10,
  _height: 10,
}

export function FlowDirection(props: DiagramNodeProps) {
  return <Shape {...FLOW_DIRECTION} {...props} />
}
