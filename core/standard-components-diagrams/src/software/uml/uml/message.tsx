import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSAGE = {
  _style: 'html=1;verticalAlign=bottom;endArrow=block;curved=0;rounded=0;',
  _width: 80,
  _height: 0,
}

export function Message(props: DiagramNodeProps) {
  return <Dependency {...MESSAGE} {...props} />
}
