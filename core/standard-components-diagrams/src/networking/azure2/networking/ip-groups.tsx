import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IP_GROUPS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/IP_Groups.svg;strokeColor=none;',
  _width: 67,
  _height: 52,
}

export function IpGroups(props: DiagramNodeProps) {
  return <Shape {...IP_GROUPS} {...props} />
}
