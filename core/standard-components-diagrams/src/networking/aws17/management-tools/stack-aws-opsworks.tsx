import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STACK_AWS_OPSWORKS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.stack_aws_opsworks;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 79.5,
  _original_height: 79.5,
}

export function StackAwsOpsworks(props: DiagramNodeProps) {
  return (
    <Shape
      {...STACK_AWS_OPSWORKS}
      {...props}
      _style={extendStyle(STACK_AWS_OPSWORKS, props)}
    />
  )
}
