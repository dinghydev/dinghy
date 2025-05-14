import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GROUP_SECURITY_GROUP: DiagramNodeProps = {
  _direction: 'vertical',
  _color: { color: '#DD344C', fill: true },
  _border: 0,
  _shape: {
    entity: 'mxgraph.openstack.neutron_subnet',
    group: 'mxgraph.aws4.group',
  },
}

export function GroupSecurityGroup(props: DiagramNodeProps) {
  return <Shape {...GROUP_SECURITY_GROUP} {...props} />
}
