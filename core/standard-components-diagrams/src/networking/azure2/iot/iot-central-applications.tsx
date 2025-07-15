import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IOT_CENTRAL_APPLICATIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/IoT_Central_Applications.svg;',
  _width: 60,
  _height: 69,
}

export function IotCentralApplications(props: DiagramNodeProps) {
  return <Shape {...IOT_CENTRAL_APPLICATIONS} {...props} />
}
