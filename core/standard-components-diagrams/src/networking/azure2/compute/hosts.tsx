import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HOSTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Hosts.svg;',
  _width: 57.199999999999996,
  _height: 68,
}

export function Hosts(props: DiagramNodeProps) {
  return <Shape {...HOSTS} {...props} />
}
