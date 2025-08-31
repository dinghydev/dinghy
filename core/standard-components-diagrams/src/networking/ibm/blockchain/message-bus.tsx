import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_BUS = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/blockchain/message_bus.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function MessageBus(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSAGE_BUS}
      {...props}
      _style={extendStyle(MESSAGE_BUS, props)}
    />
  )
}
