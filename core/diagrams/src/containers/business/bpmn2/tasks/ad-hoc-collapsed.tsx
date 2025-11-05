import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AD_HOC_COLLAPSED = {
  _style: {
    container:
      'points=[[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];shape=mxgraph.bpmn.task2;whiteSpace=wrap;rectStyle=rounded;size=10;html=1;container=1;expand=0;collapsible=0;taskMarker=abstract;isAdHoc=1;isLoopSub=1;',
  },
}

export function AdHocCollapsed(props: NodeProps) {
  return (
    <Shape
      {...AD_HOC_COLLAPSED}
      {...props}
      _style={extendStyle(AD_HOC_COLLAPSED, props)}
    />
  )
}
