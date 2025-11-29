import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_3RD_PARTY_IDP_AND_PROTOCOLS_5 = {
  _style: {
    entity:
      'endArrow=none;html=1;strokeColor=#470BED;bendable=1;rounded=0;endFill=0;endSize=3;strokeWidth=1.5;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;',
  },
  _width: 6,
  _height: 100,
}

export function Component3rdPartyIdpAndProtocols5(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, COMPONENT_3RD_PARTY_IDP_AND_PROTOCOLS_5)}
    />
  )
}
