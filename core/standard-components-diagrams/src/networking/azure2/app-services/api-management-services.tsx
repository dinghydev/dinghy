import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const API_MANAGEMENT_SERVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/app_services/API_Management_Services.svg;',
  _width: 65,
  _height: 60,
}

export function ApiManagementServices(props: DiagramNodeProps) {
  return <Shape {...API_MANAGEMENT_SERVICES} {...props} />
}
