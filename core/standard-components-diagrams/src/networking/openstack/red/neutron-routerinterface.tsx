import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NEUTRON_ROUTERINTERFACE = {
  _style: {
    entity:
      'fillColor=#C82128;aspect=fixed;sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.openstack.neutron_routerinterface;',
  },
  _width: 60,
  _height: 60,
}

export function NeutronRouterinterface(props: DiagramNodeProps) {
  return (
    <Shape
      {...NEUTRON_ROUTERINTERFACE}
      {...props}
      _style={extendStyle(NEUTRON_ROUTERINTERFACE, props)}
    />
  )
}
