import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APP_SERVICE_DOMAINS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/app_services/App_Service_Domains.svg;strokeColor=none;',
  },
  _original_width: 65,
  _original_height: 52,
}

export function AppServiceDomains(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, APP_SERVICE_DOMAINS)} />
}
