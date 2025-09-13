import { Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GROUP_SECURITY_GROUP: DiagramNodeProps = {
  _direction: 'vertical',
  _color: { color: '#DD344C', fill: true },
  _border: 0,
  _shape: {
    entity: 'mxgraph.openstack.neutron_subnet',
    container: 'mxgraph.aws4.container',
  },
}

export function GroupSecurityGroup(props: DiagramNodeProps) {
  return <Shape {...GROUP_SECURITY_GROUP} {...props} />
}
