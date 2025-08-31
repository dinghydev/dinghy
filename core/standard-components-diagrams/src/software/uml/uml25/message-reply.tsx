import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_REPLY = {
  _style: {
    dependency:
      'html=1;verticalAlign=bottom;labelBackgroundColor=none;endArrow=block;endFill=1;dashed=1;',
  },
}

export function MessageReply(props: DiagramNodeProps) {
  return (
    <Dependency
      {...MESSAGE_REPLY}
      {...props}
      _style={extendStyle(MESSAGE_REPLY, props)}
    />
  )
}
