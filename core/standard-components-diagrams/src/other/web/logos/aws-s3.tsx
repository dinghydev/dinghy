import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AWS_S3 = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.aws_s3',
  },
  _width: 61.6,
  _height: 57.6,
}

export function AwsS3(props: DiagramNodeProps) {
  return <Shape {...AWS_S3} {...props} _style={extendStyle(AWS_S3, props)} />
}
