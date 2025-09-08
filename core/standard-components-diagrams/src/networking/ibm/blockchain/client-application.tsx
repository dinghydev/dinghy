import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLIENT_APPLICATION = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/blockchain/client_application.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function ClientApplication(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLIENT_APPLICATION}
      {...props}
      _style={extendStyle(CLIENT_APPLICATION, props)}
    />
  )
}
