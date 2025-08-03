import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONVERSATION_LINK = {
  _style: {
    dependency: 'edgeStyle=elbowEdgeStyle;fontSize=12;html=1;shape=link;',
  },
}

export function ConversationLink(props: DiagramNodeProps) {
  return <Dependency {...CONVERSATION_LINK} {...props} />
}
