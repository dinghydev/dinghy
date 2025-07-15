import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMMUNICATION_SERVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Communication_Services.svg;',
  _width: 68,
  _height: 50,
}

export function CommunicationServices(props: DiagramNodeProps) {
  return <Shape {...COMMUNICATION_SERVICES} {...props} />
}
