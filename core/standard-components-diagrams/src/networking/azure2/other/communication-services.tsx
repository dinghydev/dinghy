import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMMUNICATION_SERVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Communication_Services.svg;strokeColor=none;',
  _width: 68,
  _height: 50,
}

export function CommunicationServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMMUNICATION_SERVICES}
      {...props}
      _style={extendStyle(COMMUNICATION_SERVICES, props)}
    />
  )
}
