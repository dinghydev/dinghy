import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_3RD_PARTY_LAYER = {
  _style:
    'rounded=1;whiteSpace=wrap;html=1;strokeColor=#475E75;fillColor=#F5F6F7;arcSize=24;absoluteArcSize=1;imageWidth=64;imageHeight=64;strokeWidth=1.5;verticalAlign=top;align=left;fontSize=16;fontStyle=1;spacingTop=10;spacingLeft=20;',
  _width: 0,
  _height: 440,
}

export function Component3rdPartyLayer(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_3RD_PARTY_LAYER}
      {...props}
      _style={extendStyle(COMPONENT_3RD_PARTY_LAYER, props)}
    />
  )
}
