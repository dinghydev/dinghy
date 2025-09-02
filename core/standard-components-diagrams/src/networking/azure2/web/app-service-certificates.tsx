import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APP_SERVICE_CERTIFICATES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/app_services/App_Service_Certificates.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 62,
}

export function AppServiceCertificates(props: DiagramNodeProps) {
  return (
    <Shape
      {...APP_SERVICE_CERTIFICATES}
      {...props}
      _style={extendStyle(APP_SERVICE_CERTIFICATES, props)}
    />
  )
}
