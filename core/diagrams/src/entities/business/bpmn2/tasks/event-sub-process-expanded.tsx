import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EVENT_SUB_PROCESS_EXPANDED = {
  _style: {
    entity:
      'points=[[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];shape=mxgraph.bpmn.task2;arcSize=10;taskMarker=abstract;outline=none;symbol=general;bpmnShapeType=subprocess;isLoopSub=0;verticalAlign=top;align=left;spacingLeft=5;html=1;whiteSpace=wrap;',
  },
  _width: 180,
  _height: 100,
}

export function EventSubProcessExpanded(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, EVENT_SUB_PROCESS_EXPANDED)} />
  )
}
