import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AWS_CLOUD = {
  _style: {
    container:
      'sketch=0;outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_aws_cloud;strokeColor=#AAB7B8;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#AAB7B8;dashed=0;',
    entity: {
      strokeColor: '#AAB7B8',
      fontColor: '#AAB7B8',
    },
  },
}

export function AwsCloud(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AWS_CLOUD)} />
}
