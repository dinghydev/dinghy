import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APP_SERVICE_CERTIFICATES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/app_services/App_Service_Certificates.svg;strokeColor=none;',
  _width: 70,
  _height: 64,
}

export function AppServiceCertificates(props: DiagramNodeProps) {
  return <Shape {...APP_SERVICE_CERTIFICATES} {...props} />
}
