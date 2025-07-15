import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_SERVICES_CLASSIC = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Cloud_Services_Classic.svg;',
  _width: 72,
  _height: 52,
}

export function CloudServicesClassic(props: DiagramNodeProps) {
  return <Shape {...CLOUD_SERVICES_CLASSIC} {...props} />
}
