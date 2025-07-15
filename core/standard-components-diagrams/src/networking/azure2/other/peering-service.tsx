import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PEERING_SERVICE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Peering_Service.svg;',
  _width: 68,
  _height: 69,
}

export function PeeringService(props: DiagramNodeProps) {
  return <Shape {...PEERING_SERVICE} {...props} />
}
