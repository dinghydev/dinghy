import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NON_SAP_CONTENT = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;strokeColor=#475E75;fillColor=#F5F6F7;arcSize=24;absoluteArcSize=1;imageWidth=64;imageHeight=64;strokeWidth=1.5;verticalAlign=top;align=left;fontSize=16;fontStyle=1;spacingTop=10;spacingLeft=20;',
  },
  _width: 0,
  _height: 440,
}

export function NonSapContent(props: DiagramNodeProps) {
  return (
    <Shape
      {...NON_SAP_CONTENT}
      {...props}
      _style={extendStyle(NON_SAP_CONTENT, props)}
    />
  )
}
