import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETWORK_INTERFACES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Network_Interfaces.svg;',
  _width: 68,
  _height: 60,
}

export function NetworkInterfaces(props: DiagramNodeProps) {
  return <Shape {...NETWORK_INTERFACES} {...props} />
}
