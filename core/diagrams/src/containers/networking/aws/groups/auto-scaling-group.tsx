import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AUTO_SCALING_GROUP = {
  _style: {
    container:
      'points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.groupCenter;grIcon=mxgraph.aws4.group_auto_scaling_group;grStroke=1;strokeColor=#D86613;fillColor=none;verticalAlign=top;align=center;fontColor=#D86613;dashed=1;spacingTop=25;',
    entity: {
      strokeColor: '#D86613',
      fontColor: '#D86613',
    },
  },
}

export function AutoScalingGroup(props: NodeProps) {
  return (
    <Shape
      {...AUTO_SCALING_GROUP}
      {...props}
      _style={extendStyle(AUTO_SCALING_GROUP, props)}
    />
  )
}
