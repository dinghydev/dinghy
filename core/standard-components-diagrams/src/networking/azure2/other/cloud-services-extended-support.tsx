import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_SERVICES_EXTENDED_SUPPORT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Cloud_Services_(extended_support).svg;',
  _width: 68,
  _height: 57.99999999999999,
}

export function CloudServicesExtendedSupport(props: DiagramNodeProps) {
  return <Shape {...CLOUD_SERVICES_EXTENDED_SUPPORT} {...props} />
}
