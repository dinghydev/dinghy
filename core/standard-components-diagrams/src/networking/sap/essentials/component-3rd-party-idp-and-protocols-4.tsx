import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPONENT_3RD_PARTY_IDP_AND_PROTOCOLS_4 = {
  _style: {
    entity:
      'endArrow=none;html=1;strokeColor=#188918;bendable=1;rounded=0;endFill=0;endSize=3;strokeWidth=1.5;dashed=1;sourcePerimeterSpacing=0;targetPerimeterSpacing=10;',
  },
  _width: 5,
  _height: 100,
}

export function Component3rdPartyIdpAndProtocols4(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_3RD_PARTY_IDP_AND_PROTOCOLS_4}
      {...props}
      _style={extendStyle(COMPONENT_3RD_PARTY_IDP_AND_PROTOCOLS_4, props)}
    />
  )
}
