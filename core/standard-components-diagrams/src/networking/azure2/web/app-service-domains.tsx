import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APP_SERVICE_DOMAINS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/app_services/App_Service_Domains.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 55.00000000000001,
}

export function AppServiceDomains(props: DiagramNodeProps) {
  return (
    <Shape
      {...APP_SERVICE_DOMAINS}
      {...props}
      _style={extendStyle(APP_SERVICE_DOMAINS, props)}
    />
  )
}
