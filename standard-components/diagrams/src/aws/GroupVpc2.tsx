import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GROUP_VPC2 = {
  _color: '#8C4FFF',
  _icon: 'mxgraph.aws4.group_vpc2',
}

export default function GroupVpc2(props: DiagramNodeProps) {
  return <Shape {...GROUP_VPC2} {...props} />
}
