import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FIREWALLS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Firewalls.svg;',
  _width: 71,
  _height: 60,
}

export function Firewalls(props: DiagramNodeProps) {
  return <Shape {...FIREWALLS} {...props} />
}
