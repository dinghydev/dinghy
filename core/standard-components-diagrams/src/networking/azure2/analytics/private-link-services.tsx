import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRIVATE_LINK_SERVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Private_Link_Hub.svg;strokeColor=none;',
  _width: 58.8,
  _height: 68,
}

export function PrivateLinkServices(props: DiagramNodeProps) {
  return <Shape {...PRIVATE_LINK_SERVICES} {...props} />
}
