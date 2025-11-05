import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AWS_IOT = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.aws_iot;fillColor=#5294CF;gradientColor=none;',
  },
  _original_width: 67.5,
  _original_height: 81,
}

export function AwsIot(props: NodeProps) {
  return <Shape {...AWS_IOT} {...props} _style={extendStyle(AWS_IOT, props)} />
}
