import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUB_CONVERSATION = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.conversation2;perimeter=hexagonPerimeter2;whiteSpace=wrap;html=1;aspect=fixed;bpmnConversationType=conv;isLoopSub=1;',
  },
  _original_width: 70,
  _original_height: 60,
}

export function SubConversation(props: NodeProps) {
  return (
    <Shape
      {...SUB_CONVERSATION}
      {...props}
      _style={extendStyle(SUB_CONVERSATION, props)}
    />
  )
}
