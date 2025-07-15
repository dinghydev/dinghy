import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_3RD_PARTY_IDP_AND_PROTOCOLS = {
  _style:
    'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=#470BED;fillColor=#f1ecff;fontColor=#470bed;strokeWidth=1.5;fontSize=10;fontStyle=1',
  _width: 1,
  _height: 100,
}

export function Component3rdPartyIdpAndProtocols(props: DiagramNodeProps) {
  return <Shape {...COMPONENT_3RD_PARTY_IDP_AND_PROTOCOLS} {...props} />
}
