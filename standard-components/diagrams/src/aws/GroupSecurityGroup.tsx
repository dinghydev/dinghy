import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GROUP_SECURITY_GROUP: DiagramNodeProps = {
  _direction: 'vertical',
  _border: 0,
  _icon: { group: 'mxgraph.aws4.group_security_group' },
  _shape: {
    entity: 'mxgraph.openstack.neutron_subnet',
    group: 'mxgraph.aws4.group',
  },
}

export default function GroupSecurityGroup(props: DiagramNodeProps) {
  return <Shape {...GROUP_SECURITY_GROUP} {...props} />
}
