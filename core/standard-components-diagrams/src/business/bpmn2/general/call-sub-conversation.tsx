import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CALL_SUB_CONVERSATION = {
  _style:
    'shape=mxgraph.bpmn.conversation2;perimeter=hexagonPerimeter2;whiteSpace=wrap;html=1;aspect=fixed;bpmnConversationType=call;isLoopSub=1;',
  _width: 70,
  _height: 60,
}

export function CallSubConversation(props: DiagramNodeProps) {
  return <Shape {...CALL_SUB_CONVERSATION} {...props} />
}
