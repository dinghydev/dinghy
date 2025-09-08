import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MESSAGE_SYNCHRONOUS_CALL = {
  _style: {
    dependency:
      'html=1;verticalAlign=bottom;labelBackgroundColor=none;endArrow=block;endFill=1;',
  },
}

export function MessageSynchronousCall(props: DiagramNodeProps) {
  return (
    <Dependency
      {...MESSAGE_SYNCHRONOUS_CALL}
      {...props}
      _style={extendStyle(MESSAGE_SYNCHRONOUS_CALL, props)}
    />
  )
}
