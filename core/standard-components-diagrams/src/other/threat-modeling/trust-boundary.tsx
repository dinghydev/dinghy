import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRUST_BOUNDARY = {
  _style: {
    entity:
      'html=1;fontColor=#FF3333;fontStyle=1;align=left;verticalAlign=top;spacing=0;labelBorderColor=none;fillColor=none;dashed=1;strokeWidth=2;strokeColor=#FF3333;spacingLeft=4;spacingTop=-3;',
  },
  _width: 290,
  _height: 140,
}

export function TrustBoundary(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRUST_BOUNDARY}
      {...props}
      _style={extendStyle(TRUST_BOUNDARY, props)}
    />
  )
}
