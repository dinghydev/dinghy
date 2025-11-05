import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_3RD_PARTY_IDP_AND_PROTOCOLS_2 = {
  _style: {
    entity:
      'text;html=1;align=left;verticalAlign=middle;resizable=1;points=[];autosize=1;strokeColor=none;fillColor=none;fontSize=10;fontColor=#556B82;fontFamily=Helvetica;',
  },
  _width: 3,
  _height: 100,
}

export function Component3rdPartyIdpAndProtocols2(props: NodeProps) {
  return (
    <Shape
      {...COMPONENT_3RD_PARTY_IDP_AND_PROTOCOLS_2}
      {...props}
      _style={extendStyle(COMPONENT_3RD_PARTY_IDP_AND_PROTOCOLS_2, props)}
    />
  )
}
