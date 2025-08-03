import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_ROUTER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Virtual_Router.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function VirtualRouter(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL_ROUTER} {...props} />
}
