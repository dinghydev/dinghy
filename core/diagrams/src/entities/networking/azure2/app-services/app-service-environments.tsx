import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APP_SERVICE_ENVIRONMENTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/app_services/App_Service_Environments.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
}

export function AppServiceEnvironments(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, APP_SERVICE_ENVIRONMENTS)} />
  )
}
