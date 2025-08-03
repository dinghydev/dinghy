import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSAGE_REPLY = {
  _style: {
    dependency:
      'html=1;verticalAlign=bottom;labelBackgroundColor=none;endArrow=block;endFill=1;dashed=1;',
  },
}

export function MessageReply(props: DiagramNodeProps) {
  return <Dependency {...MESSAGE_REPLY} {...props} />
}
