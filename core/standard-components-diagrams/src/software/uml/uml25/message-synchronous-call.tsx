import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSAGE_SYNCHRONOUS_CALL = {
  _style:
    'html=1;verticalAlign=bottom;labelBackgroundColor=none;endArrow=block;endFill=1;',
  _width: 160,
  _height: 0,
}

export function MessageSynchronousCall(props: DiagramNodeProps) {
  return <Dependency {...MESSAGE_SYNCHRONOUS_CALL} {...props} />
}
