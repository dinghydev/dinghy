import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONVERSATION_LINK = {
  _style: {
    dependency: 'edgeStyle=elbowEdgeStyle;fontSize=12;html=1;shape=link;',
  },
}

export function ConversationLink(props: NodeProps) {
  return (
    <Dependency {...props} _style={extendStyle(props, CONVERSATION_LINK)} />
  )
}
