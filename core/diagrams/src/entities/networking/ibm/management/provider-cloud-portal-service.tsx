import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROVIDER_CLOUD_PORTAL_SERVICE = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/management/provider_cloud_portal_service.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function ProviderCloudPortalService(props: NodeProps) {
  return (
    <Shape
      {...PROVIDER_CLOUD_PORTAL_SERVICE}
      {...props}
      _style={extendStyle(PROVIDER_CLOUD_PORTAL_SERVICE, props)}
    />
  )
}
