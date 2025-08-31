import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FLOATING_IP = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/vpc/FloatingIP.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function FloatingIp(props: DiagramNodeProps) {
  return (
    <Shape
      {...FLOATING_IP}
      {...props}
      _style={extendStyle(FLOATING_IP, props)}
    />
  )
}
