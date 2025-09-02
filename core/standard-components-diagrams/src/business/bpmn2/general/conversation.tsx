import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONVERSATION = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.conversation2;perimeter=hexagonPerimeter2;whiteSpace=wrap;html=1;aspect=fixed;bpmnConversationType=conv;',
  },
  _original_width: 70,
  _original_height: 60,
}

export function Conversation(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONVERSATION}
      {...props}
      _style={extendStyle(CONVERSATION, props)}
    />
  )
}
