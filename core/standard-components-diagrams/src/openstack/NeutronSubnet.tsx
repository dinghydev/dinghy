import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NEUTRON_SUBNET = {
  _color: '#DD344C',
  _icon: 'mxgraph.openstack.neutron_subnet',
}

export function NeutronSubnet(props: DiagramNodeProps) {
  return <Shape {...NEUTRON_SUBNET} {...props} />
}
