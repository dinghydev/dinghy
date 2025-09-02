import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AWS_S3 = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.aws_s3;',
  },
  _original_width: 34,
  _original_height: 34,
}

export function AwsS3(props: DiagramNodeProps) {
  return <Shape {...AWS_S3} {...props} _style={extendStyle(AWS_S3, props)} />
}
