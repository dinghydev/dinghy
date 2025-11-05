import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_3RD_PARTY_IDP_AND_PROTOCOLS_6 = {
  _style: {
    entity:
      'endArrow=none;html=1;strokeColor=#470BED;bendable=1;rounded=0;endFill=0;endSize=3;strokeWidth=1.5;dashed=1;edgeStyle=elbowEdgeStyle;exitX=0.5;exitY=1;exitDx=0;exitDy=0;',
  },
  _width: 7,
  _height: 100,
}

export function Component3rdPartyIdpAndProtocols6(props: NodeProps) {
  return (
    <Shape
      {...COMPONENT_3RD_PARTY_IDP_AND_PROTOCOLS_6}
      {...props}
      _style={extendStyle(COMPONENT_3RD_PARTY_IDP_AND_PROTOCOLS_6, props)}
    />
  )
}
