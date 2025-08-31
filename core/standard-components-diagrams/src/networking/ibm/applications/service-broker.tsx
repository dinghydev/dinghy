import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVICE_BROKER = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/applications/service_broker.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function ServiceBroker(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVICE_BROKER}
      {...props}
      _style={extendStyle(SERVICE_BROKER, props)}
    />
  )
}
