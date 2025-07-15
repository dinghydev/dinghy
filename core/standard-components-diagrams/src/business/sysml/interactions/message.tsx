import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSAGE = {
  _style: 'edgeStyle=none;dashed=1;html=1;endArrow=none;',
  _width: 2,
  _height: 250,
}

export function Message(props: DiagramNodeProps) {
  return <Shape {...MESSAGE} {...props} />
}
