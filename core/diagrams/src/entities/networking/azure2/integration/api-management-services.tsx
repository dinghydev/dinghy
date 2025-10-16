import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const API_MANAGEMENT_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/API_Management_Services.svg;strokeColor=none;',
  },
  _original_width: 65,
  _original_height: 60,
}

export function ApiManagementServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...API_MANAGEMENT_SERVICES}
      {...props}
      _style={extendStyle(API_MANAGEMENT_SERVICES, props)}
    />
  )
}
