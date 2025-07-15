import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUBNET = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Subnet.svg;',
  _width: 68,
  _height: 40.72,
}

export function Subnet(props: DiagramNodeProps) {
  return <Shape {...SUBNET} {...props} />
}
