import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CALL_CONVERSATION = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.conversation2;perimeter=hexagonPerimeter2;whiteSpace=wrap;html=1;aspect=fixed;bpmnConversationType=call;',
  },
  _original_width: 70,
  _original_height: 60,
}

export function CallConversation(props: DiagramNodeProps) {
  return (
    <Shape
      {...CALL_CONVERSATION}
      {...props}
      _style={extendStyle(CALL_CONVERSATION, props)}
    />
  )
}
