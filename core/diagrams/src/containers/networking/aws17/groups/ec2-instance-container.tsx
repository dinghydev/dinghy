import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EC2_INSTANCE_CONTAINER = {
  _style: {
    container:
      'dashed=0;html=1;shape=mxgraph.aws3.instance;fillColor=#F58536;gradientColor=none;dashed=0;',
    entity: {
      fillColor: '#F58536',
    },
  },
}

export function Ec2InstanceContainer(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, EC2_INSTANCE_CONTAINER)} />
  )
}
