import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPONENT_3RD_PARTY_IDP_AND_PROTOCOLS = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=#470BED;fillColor=#f1ecff;fontColor=#470bed;strokeWidth=1.5;fontSize=10;fontStyle=1',
  },
  _original_width: 1,
  _original_height: 100,
}

export function Component3rdPartyIdpAndProtocols(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_3RD_PARTY_IDP_AND_PROTOCOLS}
      {...props}
      _style={extendStyle(COMPONENT_3RD_PARTY_IDP_AND_PROTOCOLS, props)}
    />
  )
}
