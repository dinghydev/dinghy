import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NEUTRON_FLOATINGIPASSOCIATION = {
  _style: {
    entity:
      'fillColor=#808080;aspect=fixed;sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.openstack.neutron_floatingipassociation;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function NeutronFloatingipassociation(props: NodeProps) {
  return (
    <Shape
      {...NEUTRON_FLOATINGIPASSOCIATION}
      {...props}
      _style={extendStyle(NEUTRON_FLOATINGIPASSOCIATION, props)}
    />
  )
}
