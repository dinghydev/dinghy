import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVICE_BUS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Service_Bus.svg;strokeColor=none;',
  },
  _width: 70,
  _height: 60,
}

export function ServiceBus(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVICE_BUS}
      {...props}
      _style={extendStyle(SERVICE_BUS, props)}
    />
  )
}
