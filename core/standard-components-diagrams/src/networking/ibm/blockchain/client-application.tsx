import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLIENT_APPLICATION = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/blockchain/client_application.svg;',
  _width: 60,
  _height: 60,
}

export function ClientApplication(props: DiagramNodeProps) {
  return <Shape {...CLIENT_APPLICATION} {...props} />
}
