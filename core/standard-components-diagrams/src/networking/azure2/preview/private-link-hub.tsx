import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRIVATE_LINK_HUB = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/preview/Private_Link_Hub.svg;',
  _width: 60,
  _height: 69,
}

export function PrivateLinkHub(props: DiagramNodeProps) {
  return <Shape {...PRIVATE_LINK_HUB} {...props} />
}
