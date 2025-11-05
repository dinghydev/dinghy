import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APP_SERVICE_PLANS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/app_services/App_Service_Plans.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
}

export function AppServicePlans(props: NodeProps) {
  return (
    <Shape
      {...APP_SERVICE_PLANS}
      {...props}
      _style={extendStyle(APP_SERVICE_PLANS, props)}
    />
  )
}
