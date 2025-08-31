import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_3RD_PARTY_SERVICE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.3rd_party_service;',
  },
  _width: 53,
  _height: 54,
}

export function Component3rdPartyService(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_3RD_PARTY_SERVICE}
      {...props}
      _style={extendStyle(COMPONENT_3RD_PARTY_SERVICE, props)}
    />
  )
}
