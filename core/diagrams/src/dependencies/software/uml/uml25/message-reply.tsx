import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESSAGE_REPLY = {
  _style: {
    dependency:
      'html=1;verticalAlign=bottom;labelBackgroundColor=none;endArrow=block;endFill=1;dashed=1;',
  },
}

export function MessageReply(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, MESSAGE_REPLY)} />
}
