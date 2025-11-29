import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AWS_S3 = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.aws_s3',
  },
  _original_width: 61.6,
  _original_height: 57.6,
}

export function AwsS3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AWS_S3)} />
}
