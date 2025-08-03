import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APP_SERVICE_DOMAINS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/app_services/App_Service_Domains.svg;strokeColor=none;',
  _width: 68,
  _height: 55.00000000000001,
}

export function AppServiceDomains(props: DiagramNodeProps) {
  return <Shape {...APP_SERVICE_DOMAINS} {...props} />
}
