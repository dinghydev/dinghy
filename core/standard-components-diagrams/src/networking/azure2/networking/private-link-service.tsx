import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRIVATE_LINK_SERVICE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Private_Link_Service.svg;strokeColor=none;',
  _width: 69,
  _height: 40,
}

export function PrivateLinkService(props: DiagramNodeProps) {
  return <Shape {...PRIVATE_LINK_SERVICE} {...props} />
}
