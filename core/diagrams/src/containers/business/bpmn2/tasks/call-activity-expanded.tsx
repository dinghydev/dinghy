import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CALL_ACTIVITY_EXPANDED = {
  _style: {
    container:
      'points=[[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];shape=mxgraph.bpmn.task2;whiteSpace=wrap;rectStyle=rounded;size=10;html=1;container=1;expand=0;collapsible=0;bpmnShapeType=call;verticalAlign=top;align=left;spacingLeft=5;',
  },
}

export function CallActivityExpanded(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, CALL_ACTIVITY_EXPANDED)} />
  )
}
