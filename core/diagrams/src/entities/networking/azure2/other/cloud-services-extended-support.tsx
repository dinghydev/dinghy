import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD_SERVICES_EXTENDED_SUPPORT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Cloud_Services_(extended_support).svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 57.99999999999999,
}

export function CloudServicesExtendedSupport(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_SERVICES_EXTENDED_SUPPORT}
      {...props}
      _style={extendStyle(CLOUD_SERVICES_EXTENDED_SUPPORT, props)}
    />
  )
}
