import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSAGE = {
  _style: 'shape=rect;fillColor=#F7F7F7;strokeColor=none;',
  _width: 164,
  _height: 20,
}

export function Message(props: DiagramNodeProps) {
  return <Shape {...MESSAGE} {...props} />
}
