import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PEER_SERVICES = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/infrastructure/peer_services.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function PeerServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...PEER_SERVICES}
      {...props}
      _style={extendStyle(PEER_SERVICES, props)}
    />
  )
}
