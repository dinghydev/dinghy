import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CITRIX_GATEWAY_SERVICE = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.citrix_gateway_service;',
  },
  _width: 50,
  _height: 35.855,
}

export function CitrixGatewayService(props: DiagramNodeProps) {
  return (
    <Shape
      {...CITRIX_GATEWAY_SERVICE}
      {...props}
      _style={extendStyle(CITRIX_GATEWAY_SERVICE, props)}
    />
  )
}
