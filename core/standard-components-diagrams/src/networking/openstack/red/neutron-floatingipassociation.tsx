import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NEUTRON_FLOATINGIPASSOCIATION = {
  _style:
    'fillColor=#C82128;aspect=fixed;sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.openstack.neutron_floatingipassociation;',
  _width: 50,
  _height: 50,
}

export function NeutronFloatingipassociation(props: DiagramNodeProps) {
  return <Shape {...NEUTRON_FLOATINGIPASSOCIATION} {...props} />
}
