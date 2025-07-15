import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AWS_IOT = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.aws_iot;fillColor=#5294CF;gradientColor=none;',
  _width: 67.5,
  _height: 81,
}

export function AwsIot(props: DiagramNodeProps) {
  return <Shape {...AWS_IOT} {...props} />
}
