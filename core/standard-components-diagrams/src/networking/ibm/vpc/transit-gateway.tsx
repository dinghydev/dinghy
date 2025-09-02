import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRANSIT_GATEWAY = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/vpc/TransitGateway.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function TransitGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRANSIT_GATEWAY}
      {...props}
      _style={extendStyle(TRANSIT_GATEWAY, props)}
    />
  )
}
