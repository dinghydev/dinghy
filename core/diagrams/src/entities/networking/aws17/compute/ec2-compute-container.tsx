import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EC2_COMPUTE_CONTAINER = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.ec2_compute_container;fillColor=#F58534;gradientColor=none;',
  },
  _width: 60,
  _height: 34.5,
}

export function Ec2ComputeContainer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EC2_COMPUTE_CONTAINER)} />
}
