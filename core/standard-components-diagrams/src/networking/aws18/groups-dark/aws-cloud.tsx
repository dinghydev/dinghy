import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AWS_CLOUD = {
  _style: {
    group:
      'sketch=0;outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_aws_cloud;strokeColor=#858B94;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#858B94;dashed=0;',
    entity: {
      strokeColor: '#858B94',
      fontColor: '#858B94',
    },
  },
}

export function AwsCloud(props: DiagramNodeProps) {
  return <Shape {...AWS_CLOUD} {...props} />
}
