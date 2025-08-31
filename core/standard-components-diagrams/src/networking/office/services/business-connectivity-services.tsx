import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUSINESS_CONNECTIVITY_SERVICES = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.business_connectivity_services;',
  },
  _width: 34,
  _height: 51,
}

export function BusinessConnectivityServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUSINESS_CONNECTIVITY_SERVICES}
      {...props}
      _style={extendStyle(BUSINESS_CONNECTIVITY_SERVICES, props)}
    />
  )
}
