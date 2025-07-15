import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CALL_CONVERSATION = {
  _style:
    'shape=mxgraph.bpmn.conversation2;perimeter=hexagonPerimeter2;whiteSpace=wrap;html=1;aspect=fixed;bpmnConversationType=call;',
  _width: 70,
  _height: 60,
}

export function CallConversation(props: DiagramNodeProps) {
  return <Shape {...CALL_CONVERSATION} {...props} />
}
