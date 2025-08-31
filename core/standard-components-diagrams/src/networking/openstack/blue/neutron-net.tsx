import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NEUTRON_NET = {
  _style: {
    entity:
      'fillColor=#3F51B5;aspect=fixed;sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.openstack.neutron_net;',
  },
  _width: 60,
  _height: 60,
}

export function NeutronNet(props: DiagramNodeProps) {
  return (
    <Shape
      {...NEUTRON_NET}
      {...props}
      _style={extendStyle(NEUTRON_NET, props)}
    />
  )
}
