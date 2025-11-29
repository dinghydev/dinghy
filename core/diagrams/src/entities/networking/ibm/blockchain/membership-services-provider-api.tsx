import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MEMBERSHIP_SERVICES_PROVIDER_API = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/blockchain/membership_services_provider_api.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function MembershipServicesProviderApi(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, MEMBERSHIP_SERVICES_PROVIDER_API)}
    />
  )
}
