import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUB_CONVERSATION = {
  _style:
    'shape=mxgraph.bpmn.conversation2;perimeter=hexagonPerimeter2;whiteSpace=wrap;html=1;aspect=fixed;bpmnConversationType=conv;isLoopSub=1;',
  _width: 70,
  _height: 60,
}

export function SubConversation(props: DiagramNodeProps) {
  return <Shape {...SUB_CONVERSATION} {...props} />
}
