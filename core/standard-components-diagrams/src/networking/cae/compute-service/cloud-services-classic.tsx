import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_SERVICES_CLASSIC = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Cloud_Services_Classic.svg;',
  _width: 50,
  _height: 42,
}

export function CloudServicesClassic(props: DiagramNodeProps) {
  return <Shape {...CLOUD_SERVICES_CLASSIC} {...props} />
}
