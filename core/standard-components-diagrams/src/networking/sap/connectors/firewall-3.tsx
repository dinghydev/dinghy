import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FIREWALL_3 = {
  _style:
    'endArrow=none;html=1;strokeColor=#c35500;bendable=1;rounded=0;endFill=0;endSize=3;strokeWidth=3;',
  _width: 120,
  _height: 0,
}

export function Firewall3(props: DiagramNodeProps) {
  return <Shape {...FIREWALL_3} {...props} />
}
