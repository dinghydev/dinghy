import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VPC_SUBNET = {
  _style: {
    group:
      'dashed=0;html=1;shape=mxgraph.aws3.permissions;fillColor=#D9A741;gradientColor=none;dashed=0;',
    entity: {
      fillColor: '#D9A741',
    },
  },
}

export function VpcSubnet(props: DiagramNodeProps) {
  return <Shape {...VPC_SUBNET} {...props} />
}
