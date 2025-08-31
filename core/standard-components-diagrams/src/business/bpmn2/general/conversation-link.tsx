import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONVERSATION_LINK = {
  _style: {
    dependency: 'edgeStyle=elbowEdgeStyle;fontSize=12;html=1;shape=link;',
  },
}

export function ConversationLink(props: DiagramNodeProps) {
  return (
    <Dependency
      {...CONVERSATION_LINK}
      {...props}
      _style={extendStyle(CONVERSATION_LINK, props)}
    />
  )
}
