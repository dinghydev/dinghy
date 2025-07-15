import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STACK_AWS_CLOUDFORMATION = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.stack_aws_cloudformation;fillColor=#759C3E;gradientColor=none;',
  _width: 73.5,
  _height: 58.5,
}

export function StackAwsCloudformation(props: DiagramNodeProps) {
  return <Shape {...STACK_AWS_CLOUDFORMATION} {...props} />
}
