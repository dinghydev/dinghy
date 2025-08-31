import { Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NEUTRON_SUBNET = {
  _color: '#DD344C',
  _icon: 'mxgraph.openstack.neutron_subnet',
}

export function NeutronSubnet(props: DiagramNodeProps) {
  return <Shape {...NEUTRON_SUBNET} {...props} />
}
