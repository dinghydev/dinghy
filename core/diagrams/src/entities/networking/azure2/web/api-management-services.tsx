import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const API_MANAGEMENT_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/app_services/API_Management_Services.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 63,
}

export function ApiManagementServices(props: NodeProps) {
  return (
    <Shape
      {...API_MANAGEMENT_SERVICES}
      {...props}
      _style={extendStyle(API_MANAGEMENT_SERVICES, props)}
    />
  )
}
