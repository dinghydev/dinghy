import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VPC_SUBNET = {
  _style: {
    container:
      'dashed=0;html=1;shape=mxgraph.aws3.permissions;fillColor=#D9A741;gradientColor=none;dashed=0;',
    entity: {
      fillColor: '#D9A741',
    },
  },
}

export function VpcSubnet(props: NodeProps) {
  return (
    <Shape {...VPC_SUBNET} {...props} _style={extendStyle(VPC_SUBNET, props)} />
  )
}
