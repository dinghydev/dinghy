import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESSAGE_SYNCHRONOUS_CALL = {
  _style: {
    dependency:
      'html=1;verticalAlign=bottom;labelBackgroundColor=none;endArrow=block;endFill=1;',
  },
}

export function MessageSynchronousCall(props: NodeProps) {
  return (
    <Dependency
      {...props}
      _style={extendStyle(props, MESSAGE_SYNCHRONOUS_CALL)}
    />
  )
}
