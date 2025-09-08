import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PRIVATE_SUBNET = {
  _style: {
    group:
      'points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_security_group;grStroke=0;strokeColor=#00A4A6;fillColor=#E6F6F7;verticalAlign=top;align=left;spacingLeft=30;fontColor=#147EBA;dashed=0;',
    entity: {
      strokeColor: '#00A4A6',
      fillColor: '#E6F6F7',
      fontColor: '#147EBA',
    },
  },
}

export function PrivateSubnet(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRIVATE_SUBNET}
      {...props}
      _style={extendStyle(PRIVATE_SUBNET, props)}
    />
  )
}
