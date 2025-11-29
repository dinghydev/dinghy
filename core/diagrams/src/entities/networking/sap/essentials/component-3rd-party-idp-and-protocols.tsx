import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_3RD_PARTY_IDP_AND_PROTOCOLS = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=#470BED;fillColor=#f1ecff;fontColor=#470bed;strokeWidth=1.5;fontSize=10;fontStyle=1',
  },
  _width: 1,
  _height: 100,
}

export function Component3rdPartyIdpAndProtocols(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, COMPONENT_3RD_PARTY_IDP_AND_PROTOCOLS)}
    />
  )
}
