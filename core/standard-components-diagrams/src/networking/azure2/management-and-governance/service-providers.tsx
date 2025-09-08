import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SERVICE_PROVIDERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Service_Providers.svg;strokeColor=none;',
  },
  _original_width: 66,
  _original_height: 68,
}

export function ServiceProviders(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVICE_PROVIDERS}
      {...props}
      _style={extendStyle(SERVICE_PROVIDERS, props)}
    />
  )
}
