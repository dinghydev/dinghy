import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_3RD_PARTY_IDP_AND_PROTOCOLS_3 = {
  _style: {
    entity:
      'endArrow=none;html=1;strokeColor=#188918;bendable=1;rounded=0;endFill=0;endSize=3;strokeWidth=1.5;entryX=0.5;entryY=0;entryDx=0;entryDy=0;dashed=1;',
  },
  _width: 4,
  _height: 100,
}

export function Component3rdPartyIdpAndProtocols3(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_3RD_PARTY_IDP_AND_PROTOCOLS_3}
      {...props}
      _style={extendStyle(COMPONENT_3RD_PARTY_IDP_AND_PROTOCOLS_3, props)}
    />
  )
}
