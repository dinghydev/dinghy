import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVICE_BUS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Service_Bus.svg;',
  _width: 70,
  _height: 60,
}

export function ServiceBus(props: DiagramNodeProps) {
  return <Shape {...SERVICE_BUS} {...props} />
}
