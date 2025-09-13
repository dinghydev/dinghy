import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EC2_INSTANCE_CONTENTS = {
  _style: {
    container:
      'points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_ec2_instance_contents;strokeColor=#D86613;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#D86613;dashed=0;',
    entity: {
      strokeColor: '#D86613',
      fontColor: '#D86613',
    },
  },
}

export function Ec2InstanceContents(props: DiagramNodeProps) {
  return (
    <Shape
      {...EC2_INSTANCE_CONTENTS}
      {...props}
      _style={extendStyle(EC2_INSTANCE_CONTENTS, props)}
    />
  )
}
