import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSAGE_SYNCHRONOUS_CALL = {
  _style: {
    dependency:
      'html=1;verticalAlign=bottom;labelBackgroundColor=none;endArrow=block;endFill=1;',
  },
}

export function MessageSynchronousCall(props: DiagramNodeProps) {
  return <Dependency {...MESSAGE_SYNCHRONOUS_CALL} {...props} />
}
