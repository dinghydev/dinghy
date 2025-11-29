import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUSINESS_CONNECTIVITY_SERVICES = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.business_connectivity_services;',
  },
  _width: 34,
  _height: 51,
}

export function BusinessConnectivityServices(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, BUSINESS_CONNECTIVITY_SERVICES)}
    />
  )
}
