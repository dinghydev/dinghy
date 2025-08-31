import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FEDERATION_SERVICE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.federation_service;',
  _width: 58,
  _height: 59,
}

export function FederationService(props: DiagramNodeProps) {
  return (
    <Shape
      {...FEDERATION_SERVICE}
      {...props}
      _style={extendStyle(FEDERATION_SERVICE, props)}
    />
  )
}
