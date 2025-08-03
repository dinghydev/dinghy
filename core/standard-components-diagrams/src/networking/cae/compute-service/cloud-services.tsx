import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_SERVICES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Cloud_Service.svg;strokeColor=none;',
  _width: 50,
  _height: 42,
}

export function CloudServices(props: DiagramNodeProps) {
  return <Shape {...CLOUD_SERVICES} {...props} />
}
